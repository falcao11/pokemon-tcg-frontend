"use client";
import { DialogCollection } from "@/components/dialog-collection";
import VisualCardCollection from "@/components/visual-card-collection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleLogOut() {
    console.log("Logging out");
    router.push("/");
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold first:mt-0">
          My Collections
        </h2>
        <DialogCollection />
      </div>
      <div className="grid grid-cols-5 gap-10 justify-items-center">
        <VisualCardCollection
          collection={{
            collection_id: "1",
            name: "costas",
            img_url:
              "https://commondatastorage.googleapis.com/images.pricecharting.com/619ed3bf5b5045faf18d7f0d3f265b4fea979dfc4509cfacb017bed8bc293bcf/1600.jpg",
          }}
        />
      </div>
    </>
  );
}
