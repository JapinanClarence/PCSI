import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import { images } from "@/constants/images";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Card from "@/components/news-events/card";

const Announcements = () => {
  return (
    <div>
      <Container className={"py-20 space-y-5 "}>
        <div className="flex flex-col md:flex-row justify-between space-y-5">
          <h1 className="font-serif relative inline-block text-3xl font-bold ">
            Announcements
          </h1>
          <Button className={"max-w-fit bg-lighter-green rounded-sm"} size={"lg"}>
            View All <ArrowRight />
          </Button>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card
              key={i}
              image={images[`beatle_${i + 1}`]}
              title={`Announcement ${i + 1}`}
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

export default Announcements;
