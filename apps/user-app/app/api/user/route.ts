import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../lib/auth";
import { NextResponse } from "next/server";

export const GET =async()=>{
    const session=await getServerSession(NEXT_AUTH);
    try{
        if(session.user){
                return NextResponse.json({
                    user:session.user 
                })
        }
    }catch(e){
        console.error(e)
    }
    
    return NextResponse.json({
        message:"User Not logged In "
    },{
        status:403
    })
}
