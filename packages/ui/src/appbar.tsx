import { Button } from "./button"
interface appbarProps {
    user?: any,
    onSignin: any,
    onSignout: any
}
export const Appbar = ({ user, onSignin, onSignout }: appbarProps) => {
    return <div>
        <div className="flex justify-between m-5">
            <div className="text-2xl font-bold">Paytm</div>
            <Button className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700" clickfxn={user == null ? onSignin : onSignout}>{user == null ? "Login" : "Logout"}</Button>
        </div>
        <hr className="h-px border-0 bg-gray-200" />

    </div>
}