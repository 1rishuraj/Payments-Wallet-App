"use client"
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export const AppbarClient = ()=>{
    const session=useSession()
    const route=useRouter()
    return ( <div>
         <Appbar user={session.data?.user} onSignin={signIn} onSignout={async () =>{
            await signOut()
            route.push('/api/auth/signin')
         }}></Appbar>
    </div>
    );
}