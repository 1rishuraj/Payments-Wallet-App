import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();
async function main() {
    const alice=await prisma.user.upsert({
        where:{
            phone:'9999999999'
        },
        update: {},
        //update: {} is an empty object, which means that if a user with that phone number is found, no updates will be made to their existing record.
        create:{
            phone:'9999999999',
            password:'alice',
            name:'alice',
            Balance:{
                create:{
                   amount: 200,
                   locked: 0 
                }
            },
            OnRampTransaction:{
                create:{
                    amount: 200,
                    status: "Success",
                    token: "122",
                    provider: "HDFC",
                    startTime: new Date()
                }
            }
        }
    });

    const bob=await prisma.user.upsert({
        where:{
            phone:'1111111111'
        },
        update: {},
        //update: {} is an empty object, which means that if a user with that phone number is found, no updates will be made to their existing record.
        create:{
            phone:'1111111111',
            password:'bob',
            name:'bob',
            Balance:{
                create:{
                   amount: 100,
                   locked: 0 
                }
            },
            OnRampTransaction:{
                create:{
                    amount: 100,
                    status: "Failure",
                    token: "123",
                    provider: "AXIS",
                    startTime: new Date()
                }
            }
        }
    })
    console.log({alice,bob})
}

main().then(async function () {
    await prisma.$disconnect()
    // When you're done executing your database operations, it's important to close the connection to free up resources and prevent potential memory leaks. T
}).catch(async function(e){
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
    // This line is used to terminate the Node.js process with error
})