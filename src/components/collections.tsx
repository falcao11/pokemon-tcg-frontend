import { getAllCollections } from "@/app/_https/get-all-collections";
import { getSet } from "@/app/_https/get-set";
import { useQuery } from "@tanstack/react-query";
import VisualCardCollection from "./visual-card/visual-card-collection";

export default function Collections() {
  const { data } = useQuery({
    queryKey: ["collections"],
    queryFn: getAllCollections,
    staleTime: 1000 * 60, // 60 seconds
  });

  const collections = Array.isArray(data) ? data : [];

  return (
    <div className="grid grid-cols-5 gap-10 justify-items-center">
      {collections.map((collection: any) => {
        const {
          data: setData,
          isLoading: isSetLoading,
          error: setError,
        } = useQuery({
          queryKey: ["set", collection.set_id],
          queryFn: () => getSet(collection.set_id),
          staleTime: 1000 * 60, // 60 seconds
        });

        if (isSetLoading)
          return <div key={collection.collection_id}>Loading set data...</div>;
        if (setError)
          return (
            <div key={collection.collection_id}>Error loading set data</div>
          );

        return (
          <VisualCardCollection
            key={collection.collection_id}
            collection={{
              collection_id: collection.collection_id,
              name: collection.name, // Use set name if available, otherwise use set_id
              set_name: setData?.name || collection.name, // Use set name if available, otherwise use set_id
              img_url: setData?.images?.logo || "/pokemon-tcg.png", // Use set logo if available, otherwise use placeholder
            }}
          />
        );
      })}
    </div>
  );
}
