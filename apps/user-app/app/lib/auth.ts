import  CredentialsProvider  from "next-auth/providers/credentials"
import prisma from "@repo/db/client"
import bcrypt from 'bcrypt'
import { signIn } from "next-auth/react"
export const NEXT_AUTH = {
    providers:[
        CredentialsProvider({
            name:'MyCredential',
            credentials:{
                phone: {label:'Phone No.', type:'text', placeholder:"9876543210"} ,
                password: {label:'Password', type:'password', placeholder:"mypasscode"} 
            },
            async authorize(credentials: any ){
                const hashedpasscode=await bcrypt.hash(credentials.password,10)
                const existinguser=await prisma.user.findFirst({
                    where:{
                        phone:credentials?.phone
                    }
                })
                //signin
                if(existinguser){
                    //compare given password with db's hashed password 
                    const ispass=await bcrypt.compare(credentials.password,existinguser.password)
                    if(ispass){
                        return {
                            id:existinguser.id.toString(),
                            name:existinguser.name,
                            email:existinguser.email
                        }
                    }
                    return null;
                }
                //signup
                try{
                    const userVal=await prisma.user.create({
                        data:{
                            phone:credentials.phone,
                            password:hashedpasscode,
                            Balance:{
                                create:{
                                amount: 0,
                                locked: 0 
                                }
                            },
                        }
                    })
                    
                    return {
                        id:userVal.id.toString(),
                        name:userVal.name,
                        email:userVal.email
                    }
                }catch(e){
                    console.error(e)
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "secret",
    callbacks: {
        session :({session,token,user}:any)=>{
            session.user.id=token.sub;
            return session;
        }
    }
}