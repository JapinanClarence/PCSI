import Container from "@/components/common/Container";
import React from "react";
import { images } from "@/constants/images";

const Feature = () => {
  return (
    <div className="bg-accent">
      <Container className={"py-20 space-y-5 "}>
        <h1 className="font-serif relative inline-block text-4xl font-bold  ">
          Featured Beetle of the Month!
        </h1>
        {/* <p>Beetle of the month!</p> */}

        <div className="flex flex-col md:flex-row lg:p-4  gap-5">
          <div className="aspect-square flex-shrink-0 overflow-hidden w-full md:w-1/3">
            <img
              src={images.tiger_beetle}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" space-y-4">
            <h1 className="font-serif italic text-2xl font-bold">
              Tiger Beetle
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              autem magni et. Laborum aliquam quia animi quibusdam vero, libero
              et fuga quae culpa laudantium dolorem dolores rerum soluta
              corporis tenetur!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
