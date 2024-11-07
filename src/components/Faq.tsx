import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/constants";

const Faq = () => {
  return (
    <section className="container px-4 mx-auto my-20">
      <h2 className="text-center mb-20 text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQ.map((faq, index)=>(
          <AccordionItem key={index} value={faq.value}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
