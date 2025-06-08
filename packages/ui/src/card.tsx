export function Card({
  title,
  children,
  
}: {
  title: string;
  children: React.ReactNode;

}){
  return (
    <div className="m-1 px-10 py-5 bg-slate-100 border-gray-100 rounded-lg text-2xl font-bold tracking-tight text-gray-900">
      <h2 className="border-b border-gray-400">
        {title} 
      </h2>
      <div>{children}</div>
    </div>
  );
}
