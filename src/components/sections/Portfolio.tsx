"use client";

import Image from "next/image";

import projects from "@/constants/projects";

export default function Portfolio() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Transforming Ideas into Digital Excellence
          </h2>

          <p className="mt-4 text-zinc-400">
            Explore our past projects and see how we've helped businesses grow
            with innovative IT solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index}>
              {/* Image */}
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0B0B]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={900}
                  className="h-auto w-full transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-zinc-500">{project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
