import { Card } from "@repo/ui/card"
export default function ({ amount, locked }: {
    amount: number,
    locked: number
}) {
    return <div>
        <Card title="Balance">
            <div className="flex justify-between text-base font-medium text-gray-900 m-2 border-b-1 border-slate-200 py-5">
                <div> Unlocked Balance</div>
                <div> {amount/100} INR</div>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900 m-2 border-b-1 border-slate-200 py-5">
                <div> Locked Balance</div>
                <div> {locked/100} INR</div>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900 m-2 border-b-1 border-slate-200 py-6">
                <div> Total Balance</div>
                <div> {(amount+locked)/100} INR</div>
            </div>
        </Card>
    </div>
}

