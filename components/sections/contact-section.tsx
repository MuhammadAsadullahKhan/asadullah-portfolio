"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject should be at least 3 characters."),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is a bit too long."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "a0f60c98-7b45-4898-abd2-df49f5ebf981",
          name: values.name,
          email: values.email,
          subject: `New Form Submission from Portfolio: ${values.subject}`,
          Subject: values.subject,
          message: values.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-4 py-12 md:px-12 md:py-16 lg:px-28"
    >
      <div className="mb-4 space-y-5">
        <h1 className="text-5xl font-bold tracking-tight text-[color:var(--foreground)]">
          Contact
        </h1>
        <p className="text-lg text-[color:var(--muted-foreground)]">
          Have an opportunity, internship, or project in mind? Reach out and
          I&apos;ll get back to you.
        </p>
      </div>

      <hr className="mt-2 mb-8 border-[color:var(--border-soft)]" />

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-[1fr_400px]">
        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--card)] p-8 shadow-sm transition-all"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[color:var(--foreground)]">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)]"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[color:var(--foreground)]">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)]"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[color:var(--foreground)]">
                Subject
              </label>
              <input
                type="text"
                {...register("subject")}
                className="w-full rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)]"
                placeholder="What would you like to discuss?"
              />
              {errors.subject && (
                <p className="text-xs text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[color:var(--foreground)]">
                Message
              </label>
              <textarea
                rows={6}
                {...register("message")}
                className="w-full resize-none rounded-xl border border-[color:var(--border-soft)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--accent)] focus:ring-1 focus:ring-[color:var(--accent)]"
                placeholder="Share a bit about the role, project, or idea."
              />
              {errors.message && (
                <p className="text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[color:var(--foreground)] px-8 py-3.5 text-sm font-semibold text-[color:var(--background)] shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-500 mt-2">
                Your message has been sent! I'll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-500 mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </motion.div>

        {/* Illustration Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-md mx-auto select-none">

            {/* Decorative background blobs */}
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-violet-400/20 dark:bg-violet-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-indigo-400/20 dark:bg-indigo-500/15 blur-3xl pointer-events-none" />

            {/* Floating image card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
              className="relative rounded-3xl overflow-hidden
                bg-gradient-to-br from-violet-100 via-indigo-50 to-purple-100
                dark:from-[#1e1433] dark:via-[#1a1a2e] dark:to-[#16213e]
                shadow-2xl border border-violet-200/60 dark:border-violet-700/30
                p-4"
            >
              <Image
                src="/contact-illustration.png"
                alt="Contact illustration"
                width={560}
                height={560}
                priority
                className="w-full h-auto object-contain
                  mix-blend-multiply dark:mix-blend-normal
                  dark:brightness-[0.92] dark:contrast-[1.05]
                  rounded-2xl"
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
