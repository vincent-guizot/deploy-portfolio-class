"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import faqs from "@/constants/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Got Questions? We've Got Answers!
          </h2>

          <p className="mt-4 text-zinc-400">
            We've compiled answers to the most common questions to help you
            understand our services better.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="
                rounded-2xl
                border
                border-white/10
                bg-[#0F172A]
                px-6
                data-[state=open]:bg-[#131C33]
              "
            >
              <AccordionTrigger
                className="
                  py-6
                  text-left
                  text-lg
                  font-medium
                  text-white
                  hover:no-underline
                "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent
                className="
                  pb-6
                  leading-8
                  text-zinc-400
                "
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
