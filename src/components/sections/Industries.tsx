"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import industries from "@/constants/industries";

export default function Industries() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Tailored IT Solutions for Every Industry
          </h2>

          <p className="mt-4 text-zinc-400">
            From finance to healthcare and retail, we provide cutting-edge
            technology solutions to drive efficiency, security, and growth.
          </p>
        </div>

        <Tabs defaultValue="finance" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-transparent">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.value}
                value={industry.value}
                className="
                  rounded-none
                  border-b-2
                  border-transparent
                  bg-transparent
                  text-white
                  shadow-none

                  data-[state=active]:border-b-cyan-500
                  data-[state=active]:text-cyan-500
                  data-[state=active]:bg-transparent
                  data-[state=active]:shadow-none

                  hover:text-cyan-400
               "
              >
                {industry.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((industry) => (
            <TabsContent
              key={industry.value}
              value={industry.value}
              className="mt-10"
            >
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Content */}
                <div>
                  <h3 className="text-4xl font-bold leading-tight">
                    {industry.title}
                  </h3>

                  <p className="mt-5 text-zinc-400 leading-8">
                    {industry.description}
                  </p>

                  <Button className="mt-8 rounded-full bg-cyan-500 text-black hover:bg-cyan-400">
                    Detail
                  </Button>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    width={800}
                    height={600}
                    className="h-[320px] w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
