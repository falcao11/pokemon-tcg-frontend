import getCard from "@/app/_https/get-card";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import LoaderComponent from "./loader-component";

interface CardProps {
  card_id: string;
}

export default function CardImage({ card_id }: CardProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["card", card_id],
    queryFn: () => getCard(card_id),
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Image
          src={data.images.large}
          alt={data.name}
          width={500}
          height={500}
          priority
        />
      )}
    </>
  );
}
