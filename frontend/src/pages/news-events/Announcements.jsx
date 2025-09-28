import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import { images } from "@/constants/images";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Announcements = () => {
  return (
    <div>
      <Container className={"py-20 space-y-5 "}>
        <div className="flex justify-between ">
          <h1 className="font-serif relative inline-block text-3xl font-bold ">
            Announcements
          </h1>
          <Button className={"bg-lighter-green rounded-none"} size={"lg"}>View All <ArrowRight/></Button>
        </div>
        <Separator />
        <div className="space-y-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex shadow-sm  overflow-clip mb-4">
              <div
                className="w-96 overflow-clip"
                style={{
                  backgroundImage: `url(${images[`beatle_${i + 1}`]})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="p-5">
                <h1 className="font-serif font-semibold">
                  Announcement {i + 1}
                </h1>
                <span className="bg-lighter-green text-primary-foreground px-3 py-1 rounded-sm text-xs">
                  November 5, 2024
                </span>
                <p className="mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, necessitatibus doloribus nihil, sit quas molestias
                  assumenda molestiae suscipit nemo, modi cupiditate saepe iusto
                  veritatis perspiciatis ratione tenetur vero at voluptatem.
                </p>
                <Button
                  size={"sm"}
                  variant={"outline"}
                  className={"text-xs mt-4"}
                >
                  Continue Reading <ArrowRight />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Announcements;
