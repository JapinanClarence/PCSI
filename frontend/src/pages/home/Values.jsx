import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/common/Container";

function Values() {
  return (
    <Container className="py-5 ">
      <h1 className=" font-serif relative inline-block text-3xl font-bold  ">
        Values
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className={"font-serif text-1xl"}>
            Discipline &amp; Consistency
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 px-3">
            <p>
              We cultivate self-control, develop internal motivation, and make
              conscious choices to achieve desired goals amongst our members. We
              promote consistency among our members and collaborators by
              sustaining a dedicated effort and sustained focus on achieving the
              desired outcomes.
            </p>
            {/* <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p> */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className={"font-serif text-1xl"}>
            Kindess
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 px-3">
            <p>
              We value compassion, empathy, and generosity towards others, and
              even towards oneself. This also involves performing acts of
              kindness with a genuine desire to make a positive difference in
              the lives of others.
            </p>
            {/* <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p> */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className={"font-serif text-1xl"}>
            Trust
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 px-3">
            <p>
              We encourage each member to have faith that things will work out,
              even when faced with uncertainty and challenges. This also
              involves believing in one’s capabilities, the goodness of others,
              and the inherent flow of life, allowing our members and
              collaborators to navigate difficulties with resilience and hope.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className={"font-serif text-1xl"}>
            Honesty
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 px-3">
            <p>
              We promote truthfulness, integrity, and sincerity in thoughts,
              words, and actions. This also means being genuine and authentic,
              and taking responsibility for all our actions.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className={"font-serif text-1xl"}>
            Teamwork
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 px-3">
            <p>
              We promote truthfulness, integrity, and sincerity in thoughts,
              words, and actions. This also means being genuine and authentic,
              and taking responsibility for all our actions.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default Values;
