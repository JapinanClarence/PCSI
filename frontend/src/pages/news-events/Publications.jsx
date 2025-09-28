import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import { images } from "@/constants/images";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Card from "@/components/news-events/card";

const Publications = () => {
  return (
    <div>
      <Container className={"py-20 space-y-5 "}>
        <div className="flex flex-col md:flex-row space-y-5 justify-between ">
          <h1 className="font-serif relative inline-block text-3xl font-bold ">
            Latest Publications
          </h1>
          <Button className={"max-w-fit bg-lighter-green rounded-sm"} size={"lg"}>
            View All <ArrowRight />
          </Button>
        </div>
        <Separator />
        <div className="space-y-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card
              image={images[`beatle_${i + 1}`]}
              title={`Publication ${i + 1}`}
              date={" November 5, 2024"}
              description={
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, necessitatibus doloribus nihil, sit quas molestias assumenda molestiae suscipit nemo, modi cupiditate saepe iustoveritatis perspiciatis ratione tenetur vero at voluptatem."
              }
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Publications;
