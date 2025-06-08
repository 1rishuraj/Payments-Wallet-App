import { getServerSession } from "next-auth";
import AddMoneyCard from "../../../components/AddMoneyCard";
import BalanceCard from "../../../components/BalanceCard";
import prisma from "@repo/db/client";
import { NEXT_AUTH } from "../../lib/auth";
async function getbal() {
    const session = await getServerSession(NEXT_AUTH)
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        },
        select: {
            amount: true,
            locked: true
        }
    })
    return balance;
}

export default async function () {
    const bal = await getbal();
    return <div>
        <div className=" p-4 m-2 text-4xl font-bold tracking-tight text-gray-900">Transfer</div>
        <div className="mx-2 grid grid-cols-2">
            <div className="grid col-span-1 h-64">
                <AddMoneyCard />
            </div>
            <div className="grid col-span-1 h-64">
                <BalanceCard amount={bal?.amount||0} locked={bal?.locked||0} />
            </div>
        </div>
    </div>
}


