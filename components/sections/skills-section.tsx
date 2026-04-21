"use client";

import { featuredSkills } from "@/data/skills";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SkillIcon } from "@/components/skill-icon";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="mb-10 space-y-5 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          Skills
        </h2>
        <p className="text-lg text-[color:var(--muted-foreground)]">
          Key skills that define my professional identity.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featuredSkills.map((skill, idx) => {
          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * idx, duration: 0.35 }}
              className="group rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--card)] p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--muted)] text-[color:var(--foreground)] transition-colors group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
                <SkillIcon id={skill.id} className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[color:var(--foreground)]">
                {skill.name}
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--background)] px-6 py-2.5 text-sm font-medium text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--muted)]"
        >
          View All Skills
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

