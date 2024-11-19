"use client";
import { DialogCollection } from "@/components/dialog/dialog-collection";
import VisualCardCollection from "@/components/visual-card/visual-card-collection";

export default function Collection() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center ">
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold first:mt-0">
          My Collections
        </h2>
        <DialogCollection />
      </div>
      <div className="grid grid-cols-5 gap-10 justify-items-center">
        <VisualCardCollection
          collection={{
            collection_id: "1",
            name: "Lost Origin",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "2",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "3",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "4",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "5",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "6",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "7",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "8",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "9",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "10",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "11",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "12",
            name: "Lost Origin Repetidoscca casc a gv ag va fsfc ",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "13",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
        <VisualCardCollection
          collection={{
            collection_id: "14",
            name: "Lost Origin Repetidos",
            set_name: "Lost Origin",
            img_url: "/pokemon-tcg.png",
          }}
        />
      </div>
    </div>
  );
}
