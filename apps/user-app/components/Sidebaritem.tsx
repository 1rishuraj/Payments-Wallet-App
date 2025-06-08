"use client"
import { Button } from "@repo/ui/button"
import { useRouter } from "next/navigation"
import {useIdActive} from "@repo/store/useIdActive"
export default function ({ href,icon, title }: any) {
    const route = useRouter()
    const {idActive,setIdActive}=useIdActive()
    return <div>
        <Button className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 `} clickfxn={() => { setIdActive(title);route.push(href) }}>
            <div className={`flex items-center gap-2 text-xl font-medium ${idActive===title?"text-gray-800":"text-gray-500"} `}>
                {icon}
                {title}
            </div>
        </Button>

    </div>
}

