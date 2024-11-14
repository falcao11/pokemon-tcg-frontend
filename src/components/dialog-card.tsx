import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export function DialogCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Choose Cards
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chosse Cards</DialogTitle>
          <DialogDescription>
            Choose the cards you want to add or remove to the collection
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Cards</Label>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Save Cards</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
