import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";
import ServicesList from "./ServicesList";
import Hero from "./Hero";

const Services = () => {
  return (
    <div>
      <Hero/>
      <ServicesList/>
    </div>
  );
};

export default Services;
