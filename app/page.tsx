import Image from "next/image";
import { currentUser } from '@clerk/nextjs/server'
import { SignIn } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  console.log(user);

  if (!user) {
    return (
      <div className="flex items-center justify-center items-center min-h-screen bg-gray-50">
        <SignIn />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center items-center min-h-screen bg-gray-50">
     <h1 className="text-2xl text-black">Welcom to my app {user?.fullName}</h1>
    </div>
   
     );

  
}
