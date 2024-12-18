import CreateCardCollection from "@/app/_https/create-card-collection";
import userCardsCollection from "@/app/_https/get-user-cards-collection";
import { CollectionInterface } from "@/app/_interface/collection-interface";
import { queryClient } from "@/app/services/query-client";
import CardsCollection from "@/components/cards-collection";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Check, Pencil, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function AllCardsCollection({
  collection_name,
  set_id,
}: CollectionInterface) {
  const params = useParams<{ collectionId: string }>();
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [updateSelectCards, setUpdateSelectCards] = useState<string[]>([]);
  const [length, setLength] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["cards-collection", params.collectionId],
    queryFn: () => userCardsCollection(params.collectionId),
    staleTime: 1000 * 60, // 60 seconds
  });

  useEffect(() => {
    if (Array.isArray(data?.cards)) {
      const cards = data?.cards.map((card: any) => card.card_id);
      setSelectedCards(cards);
    }
  }, [data]);
  const isUpdatedCardSelected = (cardId: string) =>
    updateSelectCards.includes(cardId);

  const isCardSelected = (cardId: string) => selectedCards.includes(cardId);

  const handleCardClick = (cardId: string) => {
    if (isEditMode) {
      console.log("Card clicked is: ", cardId);
      setUpdateSelectCards((prevSelectedCards) =>
        prevSelectedCards.includes(cardId)
          ? prevSelectedCards.filter((id) => id !== cardId)
          : [...prevSelectedCards, cardId]
      );
    }
  };

  function handleEditClick() {
    console.log("Edit clicked");
    setUpdateSelectCards(selectedCards);
    setIsEditMode(true);
  }

  function handleSaveClick() {
    console.log("Save clicked");
    setSelectedCards(updateSelectCards);
    SendCards();
    queryClient.invalidateQueries({
      queryKey: ["cards-collection", params.collectionId],
    });
    setIsEditMode(false);
  }

  async function SendCards() {
    console.log("Selected cards: ", updateSelectCards);
    const response = await CreateCardCollection({
      cards: updateSelectCards,
      collection_id: params.collectionId,
    });
    console.log("Response Cards Collection: ", response);
    if (response === 201) {
      console.log("Cards updated");
    } else {
      console.log("Error on update cards");
    }
  }

  function handleCancelClick() {
    setUpdateSelectCards([]);
    setSelectedCards(selectedCards);
    setIsEditMode(false);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="scroll-m-20 pb-2 text-3xl font-bold first:mt-0">
          Collection {collection_name}
        </h1>
        <div className="flex gap-5 items-center">
          <p>
            {data?.length} of {length}
          </p>
          <div>
            {isEditMode ? (
              <div className="flex gap-5">
                <Button onClick={handleSaveClick}>
                  Save
                  <Check />
                </Button>
                <Button variant={"destructive"} onClick={handleCancelClick}>
                  Cancel
                  <X />
                </Button>
              </div>
            ) : (
              <div className="flex gap-5">
                <Button onClick={handleEditClick}>
                  Edit
                  <Pencil />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <CardsCollection
        set_id={set_id}
        onClick={handleCardClick}
        isSelected={isCardSelected}
        isUpdated={isUpdatedCardSelected}
        isEditMode={isEditMode}
        onLengthChange={setLength}
        onLoadingChange={setLoading}
      />
    </div>
  );
}
