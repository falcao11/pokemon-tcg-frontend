"use client";

import { getCollection } from "@/app/_https/get-collection";
import AllCardsCollection from "@/components/all-cards-collection";
import CollectionNotFound from "@/components/collection-not-found";
import LoaderComponent from "@/components/loader-component";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Collection() {
  const params = useParams<{ collectionId: string }>();
  const [receiveLoading, setReceiveLoading] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [zuidi, setZuidi] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ["collection", params.collectionId],
    queryFn: () => getCollection(params.collectionId),
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <>
      {loading ? (
        data?.status === 404 ? (
          <CollectionNotFound />
        ) : (
          <AllCardsCollection
            collection_id={params.collectionId}
            collection_name={data?.name}
            set_id={data?.set_id}
            onLoadingChange={setReceiveLoading}
          />
        )
      ) : (
        <LoaderComponent />
      )}
    </>
  );
}
