"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/projects", label: "Projects", id: "projects" },
  { href: "/experience", label: "Experience", id: "experience" },
  { href: "/skills", label: "Skills", id: "skills" },
  { href: "/contact", label: "Contact", id: "contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-50 border-b border-[color:var(--border-soft)] bg-[color:var(--background)]/80 backdrop-blur-xl">
      {/* Desktop uses lg:pl-24 lg:pr-32 exactly as before. Mobile uses px-4. */}
      <div className="flex h-16 w-full items-center justify-between px-4 md:px-8 lg:px-0 lg:pl-24 lg:pr-32">

        {/* Left Side: Mobile Menu Button OR Desktop Brand+Nav */}
        <div className="flex items-center lg:gap-10 md:gap-6 gap-2">
          
          {/* Mobile Menu Button (Left aligned matching screenshot) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center gap-2.5 font-semibold text-lg text-[color:var(--foreground)] transition-colors hover:text-[color:var(--muted-foreground)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            Menu
          </button>

          {/* Brand Name (Hidden on Mobile, only visible on Desktop) */}
          <Link href="/" className="group relative lg:-ml-4 hidden md:flex items-center px-2 lg:px-4 py-2 transition-all duration-300">
            <div className="absolute inset-0 -z-10 rounded-xl bg-[color:var(--muted)] opacity-0 scale-[0.98] group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-sm" />

            <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tighter text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
              Muhammad Asadullah Khan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4 lg:gap-8 text-sm">
              {navItems.map((item) => {
                const isHashLink = item.href.startsWith("#");
                const isActive =
                  pathname === item.href ||
                  (isHashLink && pathname === "/" && activeHash === item.id);

                return (
                  <li key={item.href}>
                    {isHashLink ? (
                      <a
                        href={item.href}
                        className={`group relative px-2 lg:px-3 py-1.5 transition-colors font-medium ${isActive
                          ? "text-[color:var(--foreground)]"
                          : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                          }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 -z-10 rounded-lg bg-[color:var(--muted)]" />
                        )}
                        {!isActive && (
                          <span className="absolute inset-0 -z-10 rounded-lg bg-[color:var(--muted)] opacity-0 scale-[0.9] transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100" />
                        )}
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className={`group relative px-2 lg:px-3 py-1.5 transition-colors font-medium ${isActive
                          ? "text-[color:var(--foreground)]"
                          : "text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
                          }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 -z-10 rounded-lg bg-[color:var(--muted)]" />
                        )}
                        {!isActive && (
                          <span className="absolute inset-0 -z-10 rounded-lg bg-[color:var(--muted)] opacity-0 scale-[0.9] transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100" />
                        )}
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Right Side: Theme Switcher */}
        <div className="flex items-center gap-3 text-sm">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-[color:var(--border-soft)] bg-[color:var(--background)]/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? "bg-[color:var(--muted)] text-[color:var(--foreground)]" 
                        : "text-[color:var(--muted-foreground)] hover:bg-[color:var(--muted)]/50 hover:text-[color:var(--foreground)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
