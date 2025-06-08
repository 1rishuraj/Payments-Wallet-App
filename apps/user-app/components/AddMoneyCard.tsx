"use client"
import { Card } from "@repo/ui/card"
import { TextInput } from "@repo/ui/textinput"
import { Select } from "@repo/ui/select"
import { useState } from "react";
import { Button } from "@repo/ui/button";
import { redirect } from "next/navigation";
import { Center } from "@repo/ui/center";
import createOnRampTxn from "../app/lib/actions/createOnRampTxn";
export default function () {
    
    const netBanking = [{
        name: "HDFC Bank",
        redirectURL: "https://netbanking.hdfcbank.com"
    }, {
        name: "Axis Bank",
        redirectURL: "https://www.axisbank.com/"
    }]
    const [amt, setAmt] = useState(0);
    const [selected, setSelected] = useState(netBanking[0]?.name);
    return <div>
        <Card title="Add Money">
            <TextInput title="Amount" type="number" clickfxn={(e: any) => { setAmt(e.target.value) }} />
            <Select title="Bank" array={netBanking} clickfxn={(e:any) => {
                    setSelected(e.target.value);
                }}/>
            <div className="mt-2">
                <Center>
                    <Button
                        className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
                        clickfxn={async() => {
                            const opt = netBanking.find((o) => o.name === selected);
                            await createOnRampTxn(amt*100,selected||"");
                            redirect(opt?.redirectURL || "/");
                        }}>
                        Add Money
                    </Button>
                </Center>
            </div>
        </Card>
    </div>
}

