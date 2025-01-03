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
    <div className="border rounded py-2 px-4 shadow-lg cursor-pointer flex flex-col gap-2">
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
        <Image
          src={card.img_url}
          alt={card.name}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex gap-2 justify-center">
        <h1 className="text-center font-bold">{card.number}</h1>
        <h1 className="text-center font-bold">{card.name}</h1>
      </div>
    </div>
  );
}
