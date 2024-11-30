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

export function ComboboxSet() {
  const { data } = useQuery({
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
          {value ? sets.find((set) => set.id === value)?.name : "Select Set..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="col-span-3 p-0">
        <Command>
          <CommandInput placeholder="Search Set..." />
          <CommandList>
            <CommandEmpty>No Set found.</CommandEmpty>
            <CommandGroup>
              {sets.map((set) => (
                <CommandItem
                  key={set.id}
                  value={set.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    console.log("Selected Set: ", value);
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
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
