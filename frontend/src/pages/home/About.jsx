import Container from "@/components/common/Container";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { images } from "@/constants/images";

function About() {
  return (
    <>
      <Container className="py-10 md:py-20 flex flex-nowrap flex-col md:flex-row  md:items-center gap-10 md:gap-20">
        <div className="space-y-3 md:w-2/3">
          <h1 className="  font-serif relative  text-5xl font-bold  ">
            About PCSI
          </h1>
          <Separator />

          <p className="leading-relaxed text-lg">
            We are an independent yet interconnected group that shares a passion
            for popularizing research and conservation of tropical beetles. Our
            society focuses on working with various stakeholders such as
            students, scientists, hobbyists, museum curators, educators,
            conservationists, policymakers, farmers, protected area managers,
            and local communities to enhance beetle research and conservation
            efforts, including the protection of their natural habitats.
          </p>
        </div>
       
        <div className="md:w-[60%] max-w-[50rem]">
          <img src={images.beatle_1} alt="" />
        </div>
      </Container>
      <Container className={"space-y-10 mb-20"}>
         <div className="space-y-3">
            <h1 className="relative inline-block text-5xl font-bold font-serif">
              Vision
            </h1>
            <Separator />
            <p className="leading-relaxed text-lg">
              We envisioned ourselves to be the leading institution dealing with
              the research and conservation of Philippine beetles. We also
              envisioned for Philippines as a megadiverse country to be a haven
              for the beetle species survival.
            </p>
          </div>
         <div className="space-y-3">
            <h1 className="relative inline-block text-5xl font-bold font-serif">
              Mission
            </h1>
            <Separator />
            <p className="leading-relaxed text-lg">
              Our mission is to popularize Philippine coleopterology by engaging
              more individuals and institutions in beetle research and
              conservation activities.
            </p>
          </div>

        <div className="space-y-3">
          <h1 className="relative inline-block text-5xl font-bold font-serif">
            Goals
          </h1>
          <Separator />
          <p className="leading-relaxed text-lg">
            The primary goal of PCSI is to train more beetle workers from its
            partner academic institutions, Local Government Units (LGUs),
            Non-government Organizations (NGOs), and the public in the field of
            coleopterology, particularly from within megadiverse countries. We
            also aimed to strengthen collaborations with key stakeholders such
            as scientists, museum curators, educators, conservationists, policy
            makers, farmers, protected area managers, and local communities to
            enhance beetle research and conservation efforts. And lastly,
            facilitate training, forums, regional and international conferences,
            and various initiatives to advance beetle studies, particularly in
            Southeast Asia.
          </p>
        </div>
      </Container>
    </>
  );
}

export default About;
