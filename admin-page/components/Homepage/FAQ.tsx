import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
      question: "What are the limitations of the Free Trial plan?",
      answer: "The Free Trial is a great way to explore the platform's features and experiment with building your marketplace. However, it has limitations. You can't launch your marketplace live and accept orders, storage is limited to 10GB for images and data, and you can only have up to 4 team member accounts. Upgrading to a paid plan unlocks these features and allows you to start selling!",
      value: "item-1",
    },
    {
      question: "How much coding knowledge do I need to use your platform?",
      answer:
        "No coding experience is required! Our platform is designed with a user-friendly interface that utilizes drag-and-drop functionality and intuitive tools. You can easily build and customize your marketplace without any programming skills.",
      value: "item-2",
    },
    {
      question:
        "What types of payment gateways do you integrate with?",
      answer:
        "We integrate with a wide range of popular payment gateways to ensure smooth and secure transactions for your marketplace. The specific options available may vary depending on your location and plan.",
      value: "item-3",
    },
    {
      question: "How can I ensure my marketplace is accessible to everyone?",
      answer: "Our platform prioritizes accessibility features like screen reader compatibility, clear navigation, and customizable text size. This allows you to cater to a wider audience and create an inclusive shopping experience.",
      value: "item-4",
    },
    {
      question:
        "What kind of customer support do you offer?",
      answer:
        "We offer different levels of customer support depending on your plan. The Free Trial offers access to our comprehensive knowledge base with helpful articles and tutorials. Paid plans include email support and some plans offer priority response times and dedicated account managers.",
      value: "item-5",
    },
  ];
  
  export const FAQ = () => {
    return (
      <section
        id="faq"
        className="container py-24 sm:py-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Questions
          </span>
        </h2>
  
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  
        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            rel="noreferrer noopener"
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
    );
  };