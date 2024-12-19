import { getAllCollections } from "@/app/_https/get-all-collections";
import { CollectionInterface } from "@/app/_interface/collection-interface";
import { useQuery } from "@tanstack/react-query";
import CollectionSet from "./collection-set";

export default function Collections() {
  const { data } = useQuery({
    queryKey: ["collections"],
    queryFn: getAllCollections,
    staleTime: 1000 * 60, // 60 seconds
  });

  const collections = Array.isArray(data) ? data : [];

  return (
    <div className="grid grid-cols-5 gap-10 justify-items-center">
      {collections.map((collection: CollectionInterface) => {
        return (
          <CollectionSet
            key={collection.collection_id}
            set_id={collection.set_id}
            collection_id={collection.collection_id}
            name={collection.name}
          />
        );
      })}
    </div>
  );
}
