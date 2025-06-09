import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import prisma from "@repo/db/client";
import UsersCard from "../../../components/UsersCard";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../lib/auth";

async function getUsers() {
    const session = await getServerSession(NEXT_AUTH)
    if(!session){
        return {
            msg:"Unauthorized"
        }
    }
    const ppl = await prisma.user.findMany()
    return ppl
}
export default async function () {
    const users = await getUsers()
   
    if (users) {
        return <div>
            <UsersCard users={users}/>
        </div>
    } else {
        return <div>
            <Card title="Paytm Users">
                <Center>
                    <div className="p-5 text-sm font-medium text-gray-900 ">No User Found</div>
                </Center>
            </Card>
        </div>
    }

}