import Sidebaritem from "../../components/Sidebaritem"

export default function ({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="flex h-screen">
                <div className="ml-5 my-10 flex flex-col gap-3 w-1/6 ">
                    <Sidebaritem href="/dashboard" icon={<HomeIcon/>} title="Home" />
                    <Sidebaritem href="/transfer" icon={<TransferIcon/>} title="Transfer" />
                    <Sidebaritem href="/transactions" icon={<TransactionIcon/>} title="Transactions" />
                    <Sidebaritem href="/p2pTransfer" icon={<P2PIcon/>} title="P2Ptransfer" />
                </div>
                <div className="ml-5 w-px border-0 bg-gray-200" ></div>
                <div className="w-screen">
                {children}
                </div>
            </div>
        </div>
    )
}
function HomeIcon() {
    return <svg className="size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
    </svg>
}
function TransferIcon() {
    return <svg className="size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
    </svg>
}
function TransactionIcon() {
    return <svg className="size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>
}
function P2PIcon() {
    return <svg className="size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"/>
    </svg>
}

