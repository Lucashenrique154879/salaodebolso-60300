import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem
      value={value}
      className="border border-border rounded-xl px-6 mb-3 data-[state=open]:border-primary/40 data-[state=open]:bg-primary/3 transition-all duration-300 bg-card"
    >
      <AccordionTrigger className="text-left font-raleway font-semibold text-base hover:text-primary transition-colors py-5 hover:no-underline">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed pb-5 font-lora text-sm">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
