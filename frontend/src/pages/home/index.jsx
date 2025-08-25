import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";
import Hero from "./Hero";
import About from "./About";
import Values from "./Values";
import OrganizationalStructure from "./OrganizationalStructure";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="">
        <About />
        <Values />
        <OrganizationalStructure />
      </div>
    </div>
  );
};

export default Home;
