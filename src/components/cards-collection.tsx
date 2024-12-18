import getCardsCollection from "@/app/_https/get-cards-collection";
import { SetProps } from "@/app/_interface/set-props";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import LoaderComponent from "./loader-component";
import VisualCard from "./visual/visual-card";

export default function CardsCollection({
  set_id,
  isEditMode,
  isSelected,
  isUpdated,
  onClick,
  onLengthChange,
}: SetProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["cards", set_id],
    queryFn: () => getCardsCollection(set_id),
    staleTime: 1000 * 60, // 60 seconds
  });

  useEffect(() => {
    if (data) {
      onLengthChange(data.cards.length);
    }
  }, [data, onLengthChange]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className="grid grid-cols-8 gap-10 justify-center">
          {data?.cards.map((card: any) => {
            return (
              <VisualCard
                key={card.id}
                card={{
                  card_id: card.id,
                  name: card.name,
                  img_url: card.images.small,
                }}
                onClick={() => onClick(card.id)}
                isSelected={isSelected(card.id)}
                isUpdated={isUpdated(card.id)}
                isEditMode={isEditMode}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
