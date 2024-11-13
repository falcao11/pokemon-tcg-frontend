"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  // const { data } = useQuery({
  //   queryKey: ["hello"],
  //   queryFn: getHello,
  // });

  {
    /* {data} */
  }

  const router = useRouter();

  function handleLogin() {
    console.log("login");
    router.push("/login");
  }

  return (
    <div className="bg-landing-page-mobile  bg-cover h-screen xl:bg-landing-page">
      <div className="flex flex-col items-center justify-center h-screen space-y-6 p-4 text-center">
        <p className="md:text-8xl text-3xl font-bold">
          Open boosters and save here your colection!!
        </p>
        <p className="md:text-4xl textxl">
          Login to start saving your collection
        </p>
        <Button size={"xl"} onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
