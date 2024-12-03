import { getSet } from "@/app/_https/get-set";
import { CollectionInterface } from "@/app/_interface/collection-interface";
import { useQuery } from "@tanstack/react-query";
import LoaderComponent from "./loader-component";
import VisualCardCollection from "./visual-card/visual-card-collection";

export default function CollectionSet({
  set_id,
  collection_id,
  collection_name,
}: CollectionInterface) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["set", set_id],
    queryFn: () => getSet(set_id),
    staleTime: 1000 * 60, // 60 seconds
  });

  if (isLoading) return <LoaderComponent />;
  if (error) return <div key={collection_id}>Error loading set data</div>;

  return (
    <VisualCardCollection
      key={collection_id}
      collection={{
        collection_id: collection_id,
        name: collection_name,
        set_name: data?.name || collection_name,
        img_url: data?.images?.logo || "/pokemon-tcg.png",
      }}
    />
  );
}
