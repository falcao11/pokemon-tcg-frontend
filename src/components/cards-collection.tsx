import getCardsCollection from "@/app/_https/get-cards-collection";
import { useQuery } from "@tanstack/react-query";
import LoaderComponent from "./loader-component";
import VisualCard from "./visual/visual-card";

interface SetProps {
  set_id: string;
  isEditMode: boolean;
  isSelected: (card_id: string) => boolean;
  isUpdated: (card_id: string) => boolean;
  onClick: (card_id: string) => void;
}

export default function CardsCollection({
  set_id,
  isEditMode,
  isSelected,
  isUpdated,
  onClick,
}: SetProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["cards", set_id],
    queryFn: () => getCardsCollection(set_id),
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className="grid grid-cols-10 gap-10 justify-center">
          {data.map((card: any) => {
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
