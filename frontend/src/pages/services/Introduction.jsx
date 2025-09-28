import Container from "@/components/common/Container";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { images } from "@/constants/images";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Introduction = () => {
  return (

      <Container className="py-20 flex flex-nowrap  items-center gap-20">
        <div className="space-y-3 lg:w-2/3">
          <h1 className="  font-serif relative  text-5xl font-bold  ">
            Our Services
          </h1>
          <Separator />

          <p className="leading-relaxed text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            perspiciatis fuga consequuntur illum dolores molestias ipsa dolore
            soluta velit enim sequi at maxime aspernatur eum rem odit, qui aut
            odio! Perferendis architecto reprehenderit ipsam, nobis at tenetur
            sed rem mollitia pariatur porro numquam doloribus sapiente itaque
            corrupti asperiores facilis assumenda tempore sint suscipit magni
            voluptas expedita cum. Possimus, laboriosam vitae?
          </p>
          <Button className={"rounded-full"}>Get in Touch</Button>
        </div>
      </Container>
  );
};

export default Introduction;
