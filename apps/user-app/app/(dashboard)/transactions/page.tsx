import P2PTxnCard from "../../../components/P2PTxnCard";
import OnRampTxnCard from "../../../components/OnRampTxnCard";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../lib/auth";
import prisma from "@repo/db/client";
async function gettxn() {
    const session = await getServerSession(NEXT_AUTH)
    const transactions = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        },
        select: {
            startTime: true,
            amount: true,
            status: true,
            provider: true
        }
    })
    return transactions.map(function (t) {
        return {
            time: t.startTime,      // Change key name from startTime to time
            amount: t.amount,
            status: t.status,
            provider: t.provider
        };
    });
}
async function getp2ptxn() {
    const session = await getServerSession(NEXT_AUTH);
    const allTransactions = await prisma.p2PTransfer.findMany({
        where: {
            OR: [
                { fromuserId: Number(session?.user?.id) },
                { touserId: Number(session?.user?.id) },
            ],
        },
        orderBy: {
            timeStamp: 'asc',
        },
    });
    return allTransactions.map(function (t){
        return {
           ...t,
           status:t.fromuserId==Number(session?.user?.id) ? 'Sent':'Received'
        }
    })
}
export default async function () {
    const txn = await gettxn();
    const p2ptxn = await getp2ptxn();
    return <div >
        <div className="m-2 flex flex-col gap-2">
            <OnRampTxnCard txn={txn} />
            <P2PTxnCard txn={p2ptxn} />
        </div>
    </div>
}