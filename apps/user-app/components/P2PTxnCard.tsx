import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"
import prisma from "@repo/db/client"
async function getUsers() {
    const ppl = await prisma.user.findMany()
    return ppl
}
export default async function ({ txn }: {
    txn: {
        timeStamp: Date,
        amount: number,
        status:string,
        fromuserId:number,
        touserId:number
    }[]
}) {
    if (!txn.length) {
        return <div>
            <Card title="P2P Transactions">
                <Center>
                    <div className="p-5 text-sm font-medium text-gray-900 ">No P2P Transactions</div>
                </Center>
            </Card>
        </div >
    } else {
        const users=await getUsers();
        return <div>
            <Card title="P2P Transactions">
                {txn.map(function (e) {
                    return <div key={e.timeStamp.toISOString()} className="py-2 flex items-center justify-between text-base font-medium text-gray-900 border-b-1 border-slate-200">
                        <div >
                            <div>{e.status} INR {e.status=='Sent'?`to ${users.find(u=>u.id===e.touserId)?.name}`:`from ${users.find(u=>u.id===e.fromuserId)?.name}`} </div>
                            <div className="text-gray-500 text-sm">{e.timeStamp.toISOString().slice(0, 19).replace('T', ' ')}</div>
                        </div>
                        <div className="">
                            <div>+ Rs {e.amount/100}</div>
                        </div></div>
                })}
            </Card>
        </div >
    }
}
