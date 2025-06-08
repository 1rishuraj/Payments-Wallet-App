import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import prisma from "@repo/db/client";
import UsersCard from "../../../components/UsersCard";

async function getUsers() {
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