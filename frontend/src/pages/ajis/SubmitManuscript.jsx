import React from "react";
import Container from "@/components/common/Container";
import SubPageHero from "@/components/common/SubPageHero";
import { images } from "@/constants/images";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function SubmitManuscript() {
  return (
    <div className="min-h-screen bg-white">
      <SubPageHero />
      <Container className="py-10">
        {/* Main Heading */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-4xl font-bold mb-2">
            Asian Journal of Insect Science (AJIS)
          </h1>
          <h2 className="font-serif text-1xl md:text-2xl text-gray-600 font-semibold">
            Submit Manuscript
          </h2>
        </div>
        {/* Coming Soon Section */}
        <div className="mt-8 space-y-3">
          <h3 className="font-serif text-2xl md:text-2xl font-bold">
            Coming Soon
          </h3>
          <Separator />
          <p className="text-lg leading-relaxed">
            Submit Manuscript information will be available soon.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SubmitManuscript;
