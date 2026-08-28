import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";
import Hero from "./Hero";
import About from "./About";
import Values from "./Values";
import OrganizationalStructure from "./OrganizationalStructure";
import AJIS from "./AJIS";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="">
        <About />
        <Values />
        <AJIS />
        <OrganizationalStructure />
      </div>
    </div>
  );
};

export default Home;
