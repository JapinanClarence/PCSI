import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";
import ServicesList from "./ServicesList";
import Hero from '@/components/common/SubPageHero';
import Introduction from "./Introduction";

const Services = () => {
  return (
    <div>
      <Hero/>
      <Introduction/>
      <ServicesList/>
    </div>
  );
};

export default Services;
