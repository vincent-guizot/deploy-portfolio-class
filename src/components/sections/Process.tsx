"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const processSteps = [
  {
    title: "Discovery & Strategy",
    content:
      "We deeply analyze your business goals, technical requirements, and market opportunities to craft the right roadmap.",
  },
  {
    title: "UI/UX Design",
    content:
      "We create intuitive interfaces and user experiences focused on usability, clarity, and conversion.",
  },
  {
    title: "Development & Engineering",
    content:
      "Our engineers build scalable, high-performance solutions using modern frameworks and best practices.",
  },
  {
    title: "Testing & Optimization",
    content:
      "Every product goes through performance testing, bug fixing, and optimization for maximum reliability.",
  },
  {
    title: "Launch & Support",
    content:
      "We deploy, monitor, and continuously support your digital product for long-term success.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* TOP CONTENT */}
        <div className="mb-14 space-y-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Our Process
          </p>

          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            How We Turn Ideas
            <br />
            Into Digital Success
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-zinc-400">
            Our proven workflow ensures every project is delivered efficiently,
            strategically, and with measurable business impact.
          </p>
        </div>

        {/* ACCORDION BELOW */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {processSteps.map((step, index) => (
              <AccordionItem
                key={step.title}
                value={`item-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-medium text-white hover:no-underline">
                  {step.title}
                </AccordionTrigger>

                <AccordionContent className="pb-6 leading-7 text-zinc-400">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
