
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
//using redirect here istead of useRouter's router.push as this must be server side
//while useRouter requires "use client"
import { NEXT_AUTH } from "./lib/auth";

export default async function Home() {
  const session=await getServerSession(NEXT_AUTH)
  return (
    <div>
      {session?.user!=null?redirect('/dashboard'):redirect('/api/auth/signin')}
    </div>
  );
}
