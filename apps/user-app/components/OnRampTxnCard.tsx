import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"
export default function ({ txn }: {
    txn: {
        time: Date,
        amount: number,
        status: string,
        provider: string
    }[]
}) {
    if (!txn.length) {
        return <div>
            <Card title="OnRamp Transactions">
                <Center>
                    <div className="p-5 text-base font-medium text-gray-900 ">No Recent Transactions</div>
                </Center>
            </Card>
        </div >
    } else {
        return <div>
            <Card title="OnRamp Transactions">
                {txn.map(function (e) {
                    return <div key={e.time.toISOString()} className="py-2 flex items-center justify-between text-base font-medium text-gray-900 border-b-1 border-slate-200">
                        <div >
                            <div>Credit from {e.provider} [{e.status}] </div>
                            <div className="text-gray-500 text-sm">{e.time.toISOString().slice(0, 19).replace('T', ' ')}</div>
                        </div>
                        <div className="">
                            <div>+ Rs {e.amount/100}</div>
                        </div></div>
                })}
            </Card>
        </div >
    }
}

