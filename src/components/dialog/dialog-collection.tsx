import CreateCollection from "@/app/_https/create-collection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ComboboxSet } from "../combobox/combobox-set";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const formSchema = z.object({
  name: z.string().trim(),
  set_id: z.string().trim(),
});

export function DialogCollection() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      set_id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Values: ", values);
    const result = await CreateCollection(values);
    if (result.success === false) {
      console.log("Error creating user");
    } else {
      console.log("Collection created successfully");
      queryClient.invalidateQueries({ queryKey: ["collections"] });
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Create Collection
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Collection</DialogTitle>
          <DialogDescription>
            Create a new collection to save another card's set
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Collection 1" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="set_id"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Set</FormLabel>
                  <FormControl>
                    <ComboboxSet
                      onSelect={(set_id: string) => field.onChange(set_id)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Add Collection
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
