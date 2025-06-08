import P2PTransferCard from "./P2PTransferCard"
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../app/lib/auth";
import { Card } from "@repo/ui/card";

export default async function({users}:{users:any}){
     const session=await getServerSession(NEXT_AUTH)
    return <div className="m-2 grid grid-cols-2">
                <div className="grid col-span-1">
                    {/* <div> */}
                    <Card title="Paytm Users">
                        {users.map(function (e:any) {
                            if(session?.user && e.id!=Number(session?.user?.id)){
                            return <div key={e.id} className="py-2 flex items-center justify-between text-base font-medium text-gray-900 border-b-1 border-slate-200">
                                <div >
                                    <div>👤 {e.name}</div>
                                </div>
                                <div className="">
                                    <div>📞 {e.phone}</div>
                                </div></div>
                            }
                        })}
                    </Card>
                    {/* </div> */}
                </div>
                <div className="grid col-span-1">
                    {/* <div className="rounded-2xl"> */}
                        <P2PTransferCard />
                    
                </div>
            </div>
}