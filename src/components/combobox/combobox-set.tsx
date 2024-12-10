"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { getAllSets } from "@/app/_https/get-all-sets";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import LoaderComponent from "../loader-component";

interface SetProps {
  onSelect: (set_id: string) => void;
}

export function ComboboxSet({ onSelect }: SetProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["sets"],
    queryFn: getAllSets,
    staleTime: 1000 * 60, // 60 seconds
  });

  const sets = Array.isArray(data) ? data : [];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="col-span-3 justify-between"
        >
          {value
            ? sets.find((set) => set.name === value)?.name
            : "Select Set..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="col-span-3 p-0">
        <Command>
          <CommandInput placeholder="Search Set..." />
          <CommandList>
            <CommandEmpty>No Set found.</CommandEmpty>
            <CommandGroup>
              {isLoading ? (
                <LoaderComponent />
              ) : (
                sets.map((set) => (
                  <CommandItem
                    key={set.id}
                    value={set.name}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      onSelect(set.id);
                      console.log("Selected Set: ", set.id);
                    }}
                  >
                    {set.name}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === set.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
