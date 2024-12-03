"use client";

import { VisualCardInterface } from "@/app/_interface/visual-card-interface";
import Image from "next/image";

export default function VisualCard({
  card,
  onClick,
  isSelected,
  isUpdated,
  isEditMode,
}: VisualCardInterface) {
  return (
    <div>
      <h1>{card.name}</h1>
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
