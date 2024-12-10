"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AvatarUser } from "./avatar-user";
import { Button } from "./ui/button";

export default function Navbar() {
  const router = useRouter();

  function handleLogOut() {
    console.log("Logging out");
    router.push("/");
  }

  function handleHome() {
    console.log("Home clicked");
    router.push("/app");
  }

  return (
    <div className="flex flex-row justify-between items-center px-4 py-2 border-b shadow-lg">
      <Image
        className="cursor-pointer"
        src="/pokemon-tcg.png"
        alt="logo"
        width={140}
        height={140}
        onClick={handleHome}
      />
      <div className="flex flex-row gap-10">
        <AvatarUser />
        <Button onClick={handleLogOut}>Logout</Button>
      </div>
    </div>
  );
}
