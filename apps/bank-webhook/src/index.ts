import express from 'express';
import prisma from '@repo/db/client'
const app=express()
app.use(express.json())
app.post('/hdfcWebhook',async (req,res)=>{ //hosted by Paytm for getting hit by hdfc server
    const PaymentInfo:{token:string, userId:string, amount:string}={
        token:req.body.token,
        userId:req.body.userId,
        amount:req.body.amount
    }
    try{
        const txn= await prisma.onRampTransaction.findUnique({
            where:{
                token:PaymentInfo.token
                
            }
        })
        if(txn && txn.status=="Processing"){
        await prisma.$transaction([
            prisma.balance.updateMany({
               where:{
                userId:Number(PaymentInfo.userId)
               },
               data:{
                amount:{
                    increment:Number(PaymentInfo.amount)
                }
               }
            }),
            prisma.onRampTransaction.updateMany({
               where:{
                token:PaymentInfo.token,
               },
               data:{
                status:"Success"
               }
            })
        ])  
        
        res.json({
            message:"Captured"
        })}else {
            res.status(400).json({
                message: "Transaction cannot be processed because it is not in 'Processing' status."
            });
        }

    }catch(e){
        console.error(e)
        res.status(411).json({
            message:"Error while processing webhook"
        })
    }
    
})
app.listen(3005)
