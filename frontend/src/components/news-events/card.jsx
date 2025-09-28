import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Card({ image, title, date, description }) {
  return (
    <div className="flex flex-col md:flex-row shadow-sm  overflow-clip mb-4">
      <div
        className="md:w-[394px] h-[192px] md:h-auto overflow-clip"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="p-5">
        <h1 className="font-serif font-semibold">{title}</h1>
        <span className="bg-lighter-green text-primary-foreground px-3 py-1 rounded-sm text-xs">
          {date}
        </span>
        <p className="mt-4 text-sm">{description}</p>
        <Button size={"sm"} variant={"outline"} className={"text-xs mt-4"}>
          Continue Reading <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
