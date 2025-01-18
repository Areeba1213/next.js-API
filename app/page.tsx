import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home(){
  return(
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="text-center mt-16 h-screen">
          <h1 className="text-4xl">Welcome to Areeba Next.js API</h1><br />
          <Link href={"api/external"}><button className="m-4 p-4 bg-slate-600 rounded-lg border">Go To API</button></Link>

        </div>

      </div>
    </div>
  )
}