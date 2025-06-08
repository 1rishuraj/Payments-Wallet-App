"use client"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/textinput"
import { useState } from "react"
import { Center } from "@repo/ui/center"
import { Button } from "@repo/ui/button"
import { redirect } from "next/navigation"
import createP2pTxn from "../app/lib/actions/createP2pTxn"
export default function () {
    const [ph, setPh] = useState("")
    const [amt, setAmt] = useState(0)
    return <div>
                <Card title="Send">
                    <TextInput title="Phone" type="text" clickfxn={(e: any) => { setPh(e.target.value) }} />
                    <TextInput title="Amount" type="number" clickfxn={(e: any) => { setAmt(e.target.value) }} />
                    <div className="mt-2">
                        <Center>
                            <Button
                                className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
                                clickfxn={async () => {
                                    await createP2pTxn(amt * 100, ph);
                                    redirect("/transfer");
                                }}>
                                Add Money
                            </Button>
                        </Center>
                    </div>
                </Card>
            </div>
}