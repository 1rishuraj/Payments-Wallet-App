"use server";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../auth";
export default async function (amount: number, to: string) {
  const session = await getServerSession(NEXT_AUTH);
  if (!session.user.id) {
    console.log("Unauthorized");
    return {
      msg: "Unauthorised",
    };
  }
  const ToUser = await prisma.user.findFirst({
    where: {
      phone: to,
    },
  });
  if (!ToUser) {
    console.log("Receiver not found");
    return {
      message: "Receiver not found",
    };
  }
  if (Number(ToUser.id)==Number(session.user.id)) {
    console.log("Sender and Receiver cant be same");
    return {
      message: "Sender and Receiver cant be same",
    };
  }
  const FromBalance = await prisma.balance.findFirst({
    where: {
      userId: Number(session.user.id),
    },
  });
  if (!FromBalance || FromBalance?.amount < amount) {
    console.log("Insufficient Balance");
    return {
      msg: "Insufficient Balance",
    };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(session.user.id)} FOR UPDATE`;
      // console.log("before")
      //   await new Promise((resolve)=>setTimeout(resolve,4000))
      //   console.log("after")
      await tx.balance.updateMany({
        where: { userId: Number(session.user.id) },
        data: { amount: { decrement: amount } },
      });

      await tx.balance.updateMany({
        where: { userId: Number(ToUser?.id) },
        data: { amount: { increment: amount } },
      });

      await tx.p2PTransfer.create({
        data: { 
          timeStamp : new Date(),
          amount,
          fromuserId : Number(session.user.id),
          touserId : Number(ToUser?.id) 
        },
      });
    });

    return {
      message: "Captured",
    };
  } catch (e) {
    console.error(e);
    return {
      message: "Error while processing p2p transfer",
    };
  }
}
