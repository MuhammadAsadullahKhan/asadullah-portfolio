"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  },
});

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto flex w-full max-w-5xl flex-col-reverse gap-8 px-4 pt-8 sm:px-6 lg:flex-row lg:items-center lg:px-0 lg:pt-16"
    >
      <div className="max-w-3xl space-y-4 lg:space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left">
        {/* Heading */}
        <motion.h1
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.04, y: -2 }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" as const }}
          className="cursor-default text-balance text-3xl font-semibold tracking-tight text-[color:var(--card-foreground)] sm:text-4xl lg:text-5xl"
        >
          <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-500 hover:bg-right">
            Full Stack Engineer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp(0.18)}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-sm leading-relaxed text-[color:var(--muted-foreground)] sm:text-base"
        >
          I am Muhammad Asadullah Khan, a Software Engineering student at Pak
          Austria Fachhochschule with expertise in Full Stack development. As a
          Full Stack Developer, I specialize in building responsive,
          user-centric web applications by integrating AI and Machine Learning
          capabilities into modern web frameworks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp(0.34)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 w-full max-w-[280px] sm:max-w-none"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[color:var(--foreground)]/90 px-6 py-2.5 text-sm font-medium text-[color:var(--background)] shadow-sm transition-all hover:bg-[color:var(--foreground)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[color:var(--accent)]/40"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[color:var(--border-soft)] bg-[color:var(--background)] px-6 py-2.5 text-sm font-medium text-[color:var(--foreground)] shadow-sm transition-all hover:bg-[color:var(--muted)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[color:var(--accent)]/40"
          >
            <Phone className="h-4 w-4" />
            Contact
          </Link>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: [0, -20, 0] 
        }}
        whileHover={{ scale: 1.06, y: -25 }}
        transition={{ 
          opacity: { duration: 0.6, delay: 0.12 },
          scale: { type: "spring", stiffness: 400, damping: 25 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 0.2
          }
        }}
        className="relative mx-auto mt-2 h-60 w-60 overflow-hidden rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--card)] shadow-[0_18px_60px_rgba(15,23,42,0.35)] transition-[border-color,box-shadow] duration-300 hover:border-sky-400/50 hover:shadow-[0_20px_60px_rgba(99,102,241,0.25)] sm:h-72 sm:w-72 lg:mt-0"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_55%)] mix-blend-soft-light" />
        <Image
          src="/asadullah.jpeg"
          alt="Portrait of Muhammad Asadullah Khan"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
