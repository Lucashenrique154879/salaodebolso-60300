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
    <AccordionItem value={value} className="border-2 border-border rounded-xl px-6 mb-4 hover:border-primary/50 transition-colors duration-300">
      <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-6">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};
