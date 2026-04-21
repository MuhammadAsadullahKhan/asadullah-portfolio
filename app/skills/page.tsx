"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { allSkills } from "@/data/skills";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkillIcon } from "@/components/skill-icon";

const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SkillsPage() {
    return (
        <div className="min-h-screen bg-[color:var(--background)]">
            <SiteHeader />

            <motion.main
                className="w-full px-4 py-8 md:px-12 md:py-16 lg:px-28"
                initial="hidden"
                animate="visible"
                variants={pageVariants}
            >
                <div className="mb-4 space-y-5">
                    <h1 className="text-5xl font-bold tracking-tight text-[color:var(--foreground)]">
                        Skills
                    </h1>
                    <p className="text-lg text-[color:var(--muted-foreground)]">
                        A comprehensive list of the technologies and tools I work with.
                    </p>
                </div>

                <hr className="mt-2 mb-4 border-[color:var(--border-soft)]" />

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {allSkills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={itemVariants}
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
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--background)] px-6 py-2.5 text-sm font-medium text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--muted)]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>
            </motion.main>

            <SiteFooter />
        </div>
    );
}
