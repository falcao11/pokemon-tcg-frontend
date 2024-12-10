import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function CollectionNotFound() {
  const route = useRouter();

  const handleCollections = () => {
    route.push("/app");
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Collection not found</h1>
      <Button size={"lg"} onClick={handleCollections}>
        Back to your Collections
      </Button>
    </div>
  );
}
