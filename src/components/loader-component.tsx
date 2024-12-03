import { Loader } from "lucide-react";

export default function LoaderComponent() {
  return (
    <div className="flex justify-center items-center">
      <Loader size={50} className="animate-spin" />
    </div>
  );
}
