import React from "react";
import {images} from "@/constants/images";

export default function Card({ image, title, description }) {
  return (
    <div className="flex flex-col shadow-sm    overflow-clip mb-4">
      <div
        className="h-[250px]  overflow-clip bg-muted"
        style={{
          backgroundImage: `url(${image || images.beatle_1})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="p-5 ">
        <h1 className="font-serif font-semibold">{title}</h1>
        <div 
          className="mt-4 text-sm prose prose-sm max-w-none line-clamp-4 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {/* <Button size={"sm"} variant={"outline"} className={"text-xs mt-4"}>
          Continue Reading <ArrowRight />
        </Button> */}
      </div>
    </div>
  );
}
