"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { experience } from "@/data/experience";

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

// Homepage shows first 3 only
const homeExperience = experience.slice(0, 3);

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6 lg:px-8"
    >
      {/* Centered heading */}
      <div className="mb-2 space-y-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          Experience
        </h2>
        <p className="text-lg text-[color:var(--muted-foreground)]">
          Professional journey and career timeline.
        </p>
      </div>

      <hr className="my-2 border-[color:var(--border-soft)]" />

      {/* Experience list */}
      <div className="divide-y divide-[color:var(--border-soft)]">
        {homeExperience.map((item, index) => (
          <motion.div
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            transition={{ delay: index * 0.08 }}
            className="flex items-start justify-between gap-6 py-6"
          >
            {/* Left: icon + details */}
            <div className="flex items-start gap-4">
              {/* Company icon placeholder */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--card)]">
                <Briefcase className="h-5 w-5 text-[color:var(--muted-foreground)]" />
              </div>

              {/* Text details */}
              <div className="min-w-0">
                {/* Role + date badge */}
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-[color:var(--foreground)]">
                    {item.role}
                  </h3>
                  <span className="inline-flex items-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--muted)] px-2.5 py-0.5 text-xs font-medium text-[color:var(--foreground)]">
                    {item.start} - {item.end}
                  </span>
                </div>

                {/* Company with external link */}
                <div className="mt-0.5 flex items-center gap-1">
                  <span className="text-sm text-[color:var(--muted-foreground)]">
                    {item.company}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--muted-foreground)] opacity-70" />
                </div>

                {/* Location */}
                {item.location && (
                  <p className="text-sm text-[color:var(--muted-foreground)] opacity-80">
                    {item.location}
                  </p>
                )}

                {/* Summary */}
                <p className="mt-1.5 text-sm text-[color:var(--muted-foreground)] line-clamp-2">
                  {item.summary}
                </p>
              </div>
            </div>

            {/* Right: View Details */}
            <div className="flex-shrink-0 pt-1">
              <Link prefetch={false} href={`/experience#${item.id}`} className="group flex-shrink-0 inline-flex items-center gap-1 rounded-lg border border-[color:var(--border-soft)] bg-transparent px-3 py-1.5 text-sm font-medium text-[color:var(--muted-foreground)] transition-all duration-200 hover:border-[color:var(--foreground)]/40 hover:text-[color:var(--foreground)] whitespace-nowrap">
                View Details
                <span className="inline-flex">
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All button */}
      <div className="mt-6 flex justify-center">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--background)] px-6 py-2.5 text-sm font-medium text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--muted)]"
        >
          View All Experience
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
