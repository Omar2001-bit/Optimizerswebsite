import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    id: "item-1",
    question: "What ROI can I expect?",
    answer:
      "On average, our clients see a 10–30% increase in annual revenue and cover the cost of our services within 6 months.",
    topMaskSrc: "/figmaAssets/mask-group-57.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-59.svg",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "How quickly will I see results?",
    answer:
      "Most stores see measurable improvements in as little as 3 months — with bigger gains from continuous testing.",
    topMaskSrc: "/figmaAssets/mask-group-50.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-44.svg",
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "What's the minimum commitment?",
    answer:
      "Just 6 months — enough to run real experiments and lock in lasting results. Many clients stay for years because of consistent growth.",
    topMaskSrc: "/figmaAssets/mask-group-70.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-47.svg",
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "Why is CRO a monthly service?",
    answer:
      "Because conversion optimization is not a one-time fix — it's a continuous cycle of research, testing, and scaling what works.",
    topMaskSrc: "/figmaAssets/mask-group-45.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-68.svg",
    defaultOpen: false,
  },
  {
    id: "item-5",
    question: "Is CRO only for big stores?",
    answer:
      "Not at all. Any store spending on ads or getting steady traffic can benefit from CRO. Smaller stores often see ROI even faster.",
    topMaskSrc: "/figmaAssets/mask-group-49.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-54.svg",
    defaultOpen: false,
  },
  {
    id: "item-6",
    question: "What metrics do you track?",
    answer:
      "Conversion rate, revenue per visitor, average order value, cart abandonment, and customer lifetime value.",
    topMaskSrc: "/figmaAssets/mask-group-61.svg",
    bottomMaskSrc: "/figmaAssets/mask-group-53.svg",
    defaultOpen: false,
  },
];

export const GallerySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2 pt-[100px] pb-[200px] px-[270px] w-full bg-dark-mode900">
      <div className="flex flex-col w-[900px] items-center gap-[60px] mx-auto">
        <header className="flex w-[767px] items-start flex-col gap-6">
          <h1 className="self-stretch mt-[-1.00px] font-heading-h1-semi-bold font-[number:var(--heading-h1-semi-bold-font-weight)] text-shadeswhite text-[length:var(--heading-h1-semi-bold-font-size)] text-center tracking-[var(--heading-h1-semi-bold-letter-spacing)] leading-[var(--heading-h1-semi-bold-line-height)] [font-style:var(--heading-h1-semi-bold-font-style)]">
            Frequently Asked Questions
          </h1>
        </header>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="flex flex-col items-end gap-4 w-full"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="flex flex-col w-[900px] items-start justify-center p-[9px] bg-[#ffffff03] rounded-3xl overflow-hidden border border-solid border-[#ffffff1a] shadow-[inset_0px_0px_0px_9px_#ffffff08] data-[state=open]:h-auto data-[state=closed]:h-auto"
            >
              <div className="flex flex-col items-center gap-5 p-6 w-full rounded-2xl border border-solid border-[#6ae49933] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] [background:radial-gradient(50%_50%_at_50%_0%,rgba(168,127,255,0.04)_0%,rgba(168,127,255,0)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] relative">
                <AccordionTrigger className="flex items-center justify-center gap-2 w-full p-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex-1 mt-[-1.00px] font-subheading-semi-bold font-[number:var(--subheading-semi-bold-font-weight)] text-shadeswhite text-[length:var(--subheading-semi-bold-font-size)] tracking-[var(--subheading-semi-bold-letter-spacing)] leading-[var(--subheading-semi-bold-line-height)] [font-style:var(--subheading-semi-bold-font-style)] text-left">
                    {faq.question}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="w-full pb-0">
                  <div className="font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-100 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                    {faq.answer}
                  </div>
                </AccordionContent>

                <img
                  className="absolute top-0 right-[57px] w-[180px] h-2"
                  alt="Mask group"
                  src={faq.topMaskSrc}
                />

                <img
                  className="absolute left-[57px] bottom-[-7px] w-[180px] h-2"
                  alt="Mask group"
                  src={faq.bottomMaskSrc}
                />
              </div>
            </AccordionItem>
          ))}
        </Accordion>

        <Button 
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-secondary-500 rounded h-auto"
          onClick={() => {
            document.getElementById('testimonials-booking-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          <span className="w-fit mt-[-1.00px] font-paragraph-p3-semi-bold font-[number:var(--paragraph-p3-semi-bold-font-weight)] text-neutral-900 text-[length:var(--paragraph-p3-semi-bold-font-size)] tracking-[var(--paragraph-p3-semi-bold-letter-spacing)] leading-[var(--paragraph-p3-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-semi-bold-font-style)]">
            Still have questions? Book a Call
          </span>
        </Button>
      </div>
    </section>
  );
};
