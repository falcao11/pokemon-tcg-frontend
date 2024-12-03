import { VisualCollectionInterface } from "@/app/_interface/visual-collection";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VisualCardCollection({
  collection,
}: VisualCollectionInterface) {
  const router = useRouter();

  function handleCollection() {
    console.log("Collection clicked");
    router.push(`/app/collection/${collection.collection_id}`);
  }

  return (
    <div
      className="flex flex-col gap-4 items-center bg-white rounded-xl p-6 w-full border shadow-lg cursor-pointer hover:shadow-xl"
      onClick={handleCollection}
    >
      <div className="flex flex-col gap-0 items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {collection.name}
        </h3>
        <p className="text-base font-light">{collection.set_name}</p>
      </div>
      <Image
        src={collection.img_url}
        alt={collection.name}
        width={200}
        height={200}
      />
    </div>
  );
}
