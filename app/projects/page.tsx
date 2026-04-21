"use client";

import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/* ─── animation variants ─── */
const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const headingVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProjectsPage() {
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
                <motion.div variants={headingVariants} className="mb-4 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
                        Projects
                    </h1>
                    <p className="text-base text-[color:var(--muted-foreground)]">
                        Showcasing impactful projects and technical achievements.
                    </p>
                </motion.div>

                <motion.hr variants={headingVariants} className="my-6 border-[color:var(--border-soft)]" />

                {/* All Projects Grid */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            variants={cardVariants}
                            transition={{ delay: index * 0.08 }}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--card)] shadow-sm transition-all hover:shadow-md"
                        >
                            {/* Card header: screenshot or gradient */}
                            {project.image ? (
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} preview`}
                                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            ) : (
                                <div
                                    className={`relative flex h-48 w-full flex-col items-center justify-center bg-gradient-to-br ${project.gradient ?? "from-slate-900 via-slate-800 to-slate-950"} p-6 text-center overflow-hidden`}
                                >
                                    <div className="absolute inset-0 bg-black/10" />
                                    <div className="relative z-10 flex flex-col items-center gap-2">
                                        <h2 className="text-xl font-bold tracking-tight text-white line-clamp-2">
                                            {project.name}
                                        </h2>
                                        <p className="text-xs font-medium text-white/70 line-clamp-2">
                                            {project.tagline}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-1 flex-col p-5">
                                <div className="mb-4 h-32 overflow-hidden">
                                    <h2 className="mb-1 text-lg font-bold text-[color:var(--card-foreground)] line-clamp-2">
                                        {project.name}
                                    </h2>
                                    <p className="text-sm text-[color:var(--muted-foreground)] line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mb-5 flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-[color:var(--border-soft)] bg-[color:var(--muted)] px-2.5 py-0.5 text-xs font-medium text-[color:var(--foreground)]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-center justify-end gap-3">
                                    <a
                                        href={project.githubUrl || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                                        aria-label="View GitHub Repository"
                                    >
                                        <svg
                                            role="img"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 fill-current"
                                        >
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.liveUrl || "#"}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                                        aria-label="View Live Project"
                                    >
                                        <ExternalLink className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Back to home */}
                <motion.div variants={cardVariants} className="mt-12 flex justify-center">
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
