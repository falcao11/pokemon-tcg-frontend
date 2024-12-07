import DeleteCollection from "@/app/_https/delete-collection";
import { VisualCollectionInterface } from "@/app/_interface/visual-collection";
import { useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VisualCollection({
  collection,
}: VisualCollectionInterface) {
  const queryClient = useQueryClient();
  const router = useRouter();

  function handleCollection() {
    console.log("Collection clicked");
    router.push(`/app/collection/${collection.collection_id}`);
  }

  async function handleDeleteCollection(
    event: React.MouseEvent,
    collection_id: string
  ) {
    event.stopPropagation();
    console.log("Delete clicked: ", collection_id);
    // handlelDeleteClick(collection.collection_id);
    const response = await DeleteCollection(collection_id);
    console.log("Response status: ", response);
    if (response === 200) {
      console.log("Collection deleted");
      queryClient.invalidateQueries({ queryKey: ["collections"] });
    } else {
      console.log("Error on delete collection");
    }
  }

  return (
    <div
      className="flex flex-col gap-2 bg-white rounded-xl p-6 w-full border shadow-lg cursor-pointer hover:shadow-xl"
      onClick={handleCollection}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {collection.name}
          </h3>
          <p className="text-base font-light">{collection.set_name}</p>
        </div>
        <X
          color="#ff0000"
          onClick={(event) =>
            handleDeleteCollection(event, collection.collection_id)
          }
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={collection.img_url}
          alt={collection.name}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
