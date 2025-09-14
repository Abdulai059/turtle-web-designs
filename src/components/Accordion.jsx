import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function MyAccordion() {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>I am a programmer</AccordionTrigger>
          <AccordionContent>
            Everything is good unless there are bugs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Another item</AccordionTrigger>
          <AccordionContent>
            This is a third item in the accordion.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default MyAccordion;
