export function TextInput({
    title,
    type,
    clickfxn 

}: {
    title: string;
    type:string;
    clickfxn:any 
}) {
    return (
        <div className="m-3">
            <label className="block mb-2 text-base font-medium text-gray-900 ">{title}</label>
            <input onChange={ clickfxn} type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2.5 focus:outline-none" placeholder={title} required 
            />
        </div>
    );
}
