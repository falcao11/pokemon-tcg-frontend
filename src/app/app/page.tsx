"use client";
import Collections from "@/components/collections";
import { DialogCollection } from "@/components/dialog/dialog-collection";
import EmptyCollections from "@/components/empty-collections";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { getAllCollections } from "../_https/get-all-collections";
// import VisualCardCollection from "@/components/visual-card/visual-card-collection";

export default function Collection() {
  const { data, isLoading } = useQuery({
    queryKey: ["collections"],
    queryFn: getAllCollections,
    staleTime: 1000 * 60, // 60 seconds
  });

  const collectionsNumber = data?.length || 0;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center ">
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold first:mt-0">
          My Collections
        </h2>
        <DialogCollection />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader size={50} className="animate-spin" />
        </div>
      ) : collectionsNumber > 0 ? (
        <Collections />
      ) : (
        <EmptyCollections />
      )}
    </div>
  );
}
