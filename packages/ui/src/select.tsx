interface Option {
    name: string;
    redirectURL: string;
}

export function Select({
    title,
    array,
    clickfxn
}: {
    title: string;
    array: Option[];
    clickfxn:any
}) {

    return (
        <div className="m-3">
            <label className="block mb-2 text-base font-medium text-gray-900">
                {title}
            </label>
            <select
                onChange={clickfxn}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5">
                {array.map((e) => (
                    <option key={e.name} value={e.name}>
                        {e.name}
                    </option>
                ))}
            </select>
            
        </div>
    );
}
