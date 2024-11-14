import Image from "next/image";
import { useRouter } from "next/navigation";

interface VisualCardCollectionProps {
  collection: {
    collection_id: string;
    name: string;
    img_url: string;
  };
}

export default function VisualCardCollection({
  collection,
}: VisualCardCollectionProps) {
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
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {collection.name}
      </h3>
      <Image
        src={collection.img_url}
        alt="charizard"
        width={200}
        height={200}
      />
    </div>
  );
}
