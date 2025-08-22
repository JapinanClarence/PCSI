import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import React from "react";

function About() {
  return (
    <Container className="py-5 flex gap-5 flex-col">
      <div className="space-y-3">
        <h1 className=" font-serif relative inline-block text-3xl font-bold  ">
          About PCSI
        </h1>
        <Separator/>
      
        <p className="leading-relaxed text-md ">
          We are an independent yet interconnected group that shares a passion
          for popularizing research and conservation of tropical beetles. Our
          society focuses on working with various stakeholders such as students,
          scientists, hobbyists, museum curators, educators, conservationists,
          policymakers, farmers, protected area managers, and local communities
          to enhance beetle research and conservation efforts, including the
          protection of their natural habitats.
        </p>
      </div>
      {/* <Separator /> */}
      <div className="flex gap-10">
        <div className="flex-1 space-y-3">
          <h1 className="relative inline-block text-3xl font-bold font-serif">
            Vision
          </h1>
          <Separator/>
          <p className="leading-relaxed text-md">
            We envisioned ourselves to be the leading institution dealing with
            the research and conservation of Philippine beetles. We also
            envisioned for Philippines as a megadiverse country to be a haven
            for the beetle species survival.
          </p>
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="relative inline-block text-3xl font-bold font-serif">
            Mission
          </h1>
          <Separator/>
          <p className="leading-relaxed text-md">
            Our mission is to popularize Philippine coleopterology by engaging
            more individuals and institutions in beetle research and
            conservation activities.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="relative inline-block text-3xl font-bold font-serif">
          Goals
        </h1>
        <Separator/>
        <p className="leading-relaxed text-md">
          The primary goal of PCSI is to train more beetle workers from its
          partner academic institutions, Local Government Units (LGUs),
          Non-government Organizations (NGOs), and the public in the field of
          coleopterology, particularly from within megadiverse countries. We
          also aimed to strengthen collaborations with key stakeholders such as
          scientists, museum curators, educators, conservationists, policy
          makers, farmers, protected area managers, and local communities to
          enhance beetle research and conservation efforts. And lastly,
          facilitate training, forums, regional and international conferences,
          and various initiatives to advance beetle studies, particularly in
          Southeast Asia.
        </p>
      </div>
    </Container>
  );
}

export default About;
