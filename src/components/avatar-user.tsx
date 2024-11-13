import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarUser() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/falcao11.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
