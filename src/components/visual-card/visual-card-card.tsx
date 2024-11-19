"use client";

import Image from "next/image";

interface VisualCardProps {
  card: {
    card_id: string;
    name: string;
    img_url: string;
  };
  onClick: () => void;
  isSelected: boolean;
  isUpdated: boolean;
  isEditMode: boolean;
}

export default function VisualCard({
  card,
  onClick,
  isSelected,
  isUpdated,
  isEditMode,
}: VisualCardProps) {
  return (
    <div
      className={`shadow-lg cursor-pointer transform transition duration-400 ease-in-out 
        ${
          isEditMode
            ? `${isUpdated ? "opacity-100" : "opacity-60"}`
            : `${isSelected ? "opacity-100" : "opacity-60"}`
        }
`}
      onClick={onClick}
    >
      <Image src={card.img_url} alt={card.name} width={200} height={200} />
    </div>
  );
}

//  className={`shadow-lg cursor-pointer
//    ${ isSelected
//      ? "opacity-100"
//      : "opacity-6"}
//    ${isEditMode
//        ? "transform transition duration-400 ease-in-out"
//        : ""}
// `}
