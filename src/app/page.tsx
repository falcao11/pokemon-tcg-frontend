"use client"
import { useQuery } from "@tanstack/react-query";
import { getHello } from "./[https]/get-hello";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["hello"],
    queryFn: getHello
  })

  return (
    <div>
      {data}
    </div>
  );
}
