"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import { experience } from "@/data/experience";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/* ─── animation variants ─── */
const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const detailVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
    },
};

const tagVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.05, duration: 0.2, ease: "easeOut" },
    }),
};

export default function ExperiencePage() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                setExpandedId(hash);
                // Allow time for state update and potential accordion animation
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 400);
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const toggle = (id: string) =>
        setExpandedId((prev) => (prev === id ? null : id));

    return (
        <div className="min-h-screen bg-[color:var(--background)]">
            <SiteHeader />

            <motion.main
                className="w-full px-4 py-8 md:px-12 md:py-16 lg:px-28"
                initial="hidden"
                animate="visible"
                variants={pageVariants}
            >
                {/* Page Header */}
                <motion.div variants={headingVariants} className="mb-4 space-y-5">
                    <h1 className="text-5xl font-bold tracking-tight text-[color:var(--foreground)]">
                        Experience
                    </h1>
                    <p className="text-lg text-[color:var(--muted-foreground)]">
                        Professional journey and career timeline.
                    </p>
                </motion.div>

                <motion.hr
                    variants={headingVariants}
                    className="mb-4 mt-2 border-[color:var(--border-soft)]"
                />

                {/* Experience cards */}
                <div className="space-y-4">
                    {experience.map((item) => {
                        const isOpen = expandedId === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                id={item.id}
                                variants={cardVariants}
                                className={`scroll-mt-32 rounded-2xl border transition-shadow duration-300 ${isOpen
                                    ? "border-[color:var(--foreground)]/30 shadow-md"
                                    : "border-[color:var(--border-soft)] shadow-sm hover:shadow-md"
                                    } bg-[color:var(--card)]`}
                            >
                                {/* ── collapsed row ── */}
                                <div className="flex items-start justify-between gap-6 p-5">
                                    {/* Icon + info */}
                                    <div className="flex items-start gap-4">
                                        {/* Company avatar */}
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--muted)]">
                                            <Briefcase className="h-5 w-5 text-[color:var(--muted-foreground)]" />
                                        </div>

                                        <div className="min-w-0">
                                            {/* Role + date */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h2 className="text-base font-bold text-[color:var(--foreground)]">
                                                    {item.role}
                                                </h2>
                                                <span className="inline-flex items-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--muted)] px-2.5 py-0.5 text-xs font-medium text-[color:var(--foreground)]">
                                                    {item.start} – {item.end}
                                                </span>
                                            </div>

                                            {/* Company */}
                                            <div className="mt-0.5 flex items-center gap-1">
                                                <span className="text-sm font-medium text-[color:var(--muted-foreground)]">
                                                    {item.company}
                                                </span>
                                                <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--muted-foreground)] opacity-60" />
                                            </div>

                                            {/* Location */}
                                            {item.location && (
                                                <p className="text-xs text-[color:var(--muted-foreground)] opacity-70">
                                                    {item.location}
                                                </p>
                                            )}

                                            {/* One-line summary */}
                                            <p className="mt-1.5 text-sm text-[color:var(--muted-foreground)] line-clamp-1">
                                                {item.summary}
                                            </p>
                                        </div>
                                    </div>

                                    {/* View Details button */}
                                    <button
                                        onClick={() => toggle(item.id)}
                                        aria-expanded={isOpen}
                                        className="group flex-shrink-0 inline-flex items-center gap-1 rounded-lg border border-[color:var(--border-soft)] bg-transparent px-3 py-1.5 text-sm font-medium text-[color:var(--muted-foreground)] transition-all duration-200 hover:border-[color:var(--foreground)]/40 hover:text-[color:var(--foreground)] whitespace-nowrap"
                                    >
                                        {isOpen ? "Hide Details" : "View Details"}
                                        <motion.span
                                            animate={{ rotate: isOpen ? 90 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="inline-flex"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                        </motion.span>
                                    </button>
                                </div>

                                {/* ── expandable details panel ── */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="details"
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={detailVariants}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-[color:var(--border-soft)] px-5 pb-6 pt-5">
                                                <div className="ml-16 space-y-5">

                                                    {/* Technologies */}
                                                    {item.technologies.length > 0 && (
                                                        <div>
                                                            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[color:var(--foreground)]">
                                                                Technologies
                                                            </p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {item.technologies.map((tech, i) => (
                                                                    <motion.span
                                                                        key={tech}
                                                                        custom={i}
                                                                        initial="hidden"
                                                                        animate="visible"
                                                                        variants={tagVariants}
                                                                        className="rounded-md border border-[color:var(--border-soft)] bg-[color:var(--muted)] px-2.5 py-0.5 text-xs font-medium text-[color:var(--foreground)]"
                                                                    >
                                                                        {tech}
                                                                    </motion.span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Highlights */}
                                                    {item.highlights.length > 0 && (
                                                        <div>
                                                            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[color:var(--foreground)]">
                                                                Achievements
                                                            </p>
                                                            <ul className="space-y-2">
                                                                {item.highlights.map((h, i) => (
                                                                    <motion.li
                                                                        key={h}
                                                                        initial={{ opacity: 0, x: -8 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: i * 0.07, duration: 0.25 }}
                                                                        className="flex items-start gap-2.5 text-sm text-[color:var(--muted-foreground)]"
                                                                    >
                                                                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--muted-foreground)] opacity-60" />
                                                                        {h}
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Back to home */}
                <motion.div variants={cardVariants} className="mt-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--background)] px-6 py-2.5 text-sm font-medium text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--muted)]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </motion.div>
            </motion.main>

            <SiteFooter />
        </div>
    );
}
