"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import servicesContact from "@/constants/servicesContact";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Let's Build Something Great Together
          </h2>

          <p className="mt-4 text-zinc-400">
            Have a project in mind? Fill out the form below, and our team will
            get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Name */}
          <div>
            <label className="mb-3 block text-sm text-white">Name</label>

            <Input
              placeholder="Input your name"
              className="
                h-14
                border-white/10
                bg-[#111827]
                text-white
                placeholder:text-zinc-500
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-sm text-white">Email</label>

            <Input
              type="email"
              placeholder="Input your email"
              className="
                h-14
                border-white/10
                bg-[#111827]
                text-white
                placeholder:text-zinc-500
              "
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-3 block text-sm text-white">Message</label>

            <Textarea
              rows={6}
              placeholder="Input your message"
              className="
                resize-none
                border-white/10
                bg-[#111827]
                text-white
                placeholder:text-zinc-500
              "
            />
          </div>

          {/* Services */}
          <div>
            <label className="mb-5 block text-sm text-white">Service</label>

            <div className="grid gap-4 md:grid-cols-2">
              {servicesContact.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <Checkbox />

                  <span className="text-sm text-zinc-300">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="
              h-14
              w-full
              rounded-full
              bg-sky-500
              text-white
              hover:bg-sky-400
            "
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
