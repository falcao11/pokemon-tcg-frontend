"use client";

import { Button } from "@/components/ui/button";
import VisualCard from "@/components/visual-card/visual-card-card";
import { Check, Pencil, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Collection() {
  const params = useParams<{ collectionId: string }>();
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [updateSelectCards, setUpdateSelectCards] = useState<string[]>([]);

  const isUpdatedCardSelected = (cardId: string) =>
    updateSelectCards.includes(cardId);
  const isCardSelected = (cardId: string) => selectedCards.includes(cardId);

  const handleCardClick = (cardId: string) => {
    if (isEditMode) {
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
    setIsEditMode(false);
  }

  function handleCancelClick() {
    console.log("Cancel clicked");
    setUpdateSelectCards([]);
    setSelectedCards(selectedCards);
    setIsEditMode(false);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="scroll-m-20 pb-2 text-3xl font-bold first:mt-0">
          Collection {params.collectionId}
        </h1>
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
            <Button onClick={handleEditClick}>
              Edit
              <Pencil />
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-10 gap-10 justify-center">
        <VisualCard
          key={"1"}
          card={{
            card_id: "1",
            name: "costas",
            img_url:
              "https://commondatastorage.googleapis.com/images.pricecharting.com/619ed3bf5b5045faf18d7f0d3f265b4fea979dfc4509cfacb017bed8bc293bcf/1600.jpg",
          }}
          onClick={() => handleCardClick("1")}
          isSelected={isCardSelected("1")}
          isUpdated={isUpdatedCardSelected("1")}
          isEditMode={isEditMode}
        />
        <VisualCard
          key={"2"}
          card={{
            card_id: "2",
            name: "costas",
            img_url:
              "https://commondatastorage.googleapis.com/images.pricecharting.com/619ed3bf5b5045faf18d7f0d3f265b4fea979dfc4509cfacb017bed8bc293bcf/1600.jpg",
          }}
          onClick={() => handleCardClick("2")}
          isSelected={isCardSelected("2")}
          isUpdated={isUpdatedCardSelected("2")}
          isEditMode={isEditMode}
        />
        <VisualCard
          key={"3"}
          card={{
            card_id: "3",
            name: "costas",
            img_url:
              "https://commondatastorage.googleapis.com/images.pricecharting.com/619ed3bf5b5045faf18d7f0d3f265b4fea979dfc4509cfacb017bed8bc293bcf/1600.jpg",
          }}
          onClick={() => handleCardClick("3")}
          isSelected={isCardSelected("3")}
          isUpdated={isUpdatedCardSelected("3")}
          isEditMode={isEditMode}
        />
        <VisualCard
          key={"4"}
          card={{
            card_id: "4",
            name: "costas",
            img_url:
              "https://commondatastorage.googleapis.com/images.pricecharting.com/619ed3bf5b5045faf18d7f0d3f265b4fea979dfc4509cfacb017bed8bc293bcf/1600.jpg",
          }}
          onClick={() => handleCardClick("4")}
          isSelected={isCardSelected("4")}
          isUpdated={isUpdatedCardSelected("4")}
          isEditMode={isEditMode}
        />
        <VisualCard
          key={"5"}
          card={{
            card_id: "5",
            name: "costas",
            img_url:
              "https://commondatastorage.googleapis.com/images.pricecharting.com/619ed3bf5b5045faf18d7f0d3f265b4fea979dfc4509cfacb017bed8bc293bcf/1600.jpg",
          }}
          onClick={() => handleCardClick("5")}
          isSelected={isCardSelected("5")}
          isUpdated={isUpdatedCardSelected("5")}
          isEditMode={isEditMode}
        />
      </div>
    </div>
  );
}
