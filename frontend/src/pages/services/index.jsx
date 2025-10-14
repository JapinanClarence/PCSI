import { Button } from "@/components/ui/button";
import React from "react";
import Hero from '@/components/common/SubPageHero';
import ServicesList from "./ServicesList";
import ServicesList2 from "./ServicesList-2";
const Services = () => {
  return (
    <div>
      <Hero/>
      {/* <Introduction/> */}
      {/* <ServicesList/> */}
      <ServicesList2/>
    </div>
  );
};

export default Services;
