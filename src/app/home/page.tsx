import { AvatarUser } from "@/components/avatar-user";
import { ComboboxCollection } from "@/components/combobox-collection";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="p-10">
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-10">
          <ComboboxCollection />
          <Button className="flex justify-center items-center">
            Add Collection
            <Plus />
          </Button>
          <Button>
            Add Cards
            <Plus />
          </Button>
        </div>
        <div className="flex flex-row gap-10">
          <AvatarUser />
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  );
}
