"use client";

import { getCollection } from "@/app/_https/get-collection";
import AllCardsCollection from "@/components/all-cards-collection";
import CollectionNotFound from "@/components/collection-not-found";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Collection() {
  const params = useParams<{ collectionId: string }>();

  const { data } = useQuery({
    queryKey: ["collection", params.collectionId],
    queryFn: () => getCollection(params.collectionId),
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <>
      {data?.status === 404 ? (
        <CollectionNotFound />
      ) : (
        <AllCardsCollection
          collection_id={params.collectionId}
          collection_name={data?.name}
          set_id={data?.set_id}
        />
      )}
    </>
  );
}
