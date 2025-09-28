import Container from "@/components/common/Container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { images } from "@/constants/images";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div
      className="h-96 border-b-2 border-b-dark-green"
      style={{
        backgroundImage: `url(${images.tiger_beetle})`,
        backgroundAttachment: "fixed",
        backgroundSize:"cover",
      }}
    >

    </div>
  );
};

export default Hero;
