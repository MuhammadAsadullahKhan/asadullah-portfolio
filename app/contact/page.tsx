"use client";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactSection } from "@/components/sections/contact-section";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[color:var(--background)] flex flex-col">
            <SiteHeader />
            <div className="flex-1">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={pageVariants}
                >
                    <motion.div variants={itemVariants}>
                        <ContactSection />
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-16 flex justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--background)] px-6 py-2.5 text-sm font-medium text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--muted)]"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            <SiteFooter />
        </div>
    );
}
