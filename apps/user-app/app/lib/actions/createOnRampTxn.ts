"use server"
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../auth";
export default async function (amount:number,provider:string) {
    const session= await getServerSession(NEXT_AUTH)
    const token=Math.random().toString()
    if(!session.user.id){
        return {
            msg:"Unauthorised"
        }
    }
    await prisma.onRampTransaction.create({
        data:{
            status :"Processing",
            token : token,//get from bank
            provider,
            startTime:new Date(),
            amount ,
            userId:Number(session.user.id)
        }
    })
    return {
        msg:"Done"
    }
}