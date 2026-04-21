export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Asadullah Khan",
    url: "https://example.com", // replace with real domain when deployed
    jobTitle: "BS Software Engineering Student",
    description:
      "BS Software Engineering student focused on React, Next.js, frontend development, video editing, and ML experiments.",
    sameAs: [
      "https://www.linkedin.com/in/muhammad-asadullahkhan/",
      "https://github.com/MuhammadAsadullahKhan",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haripur",
      addressRegion: "KPK",
      addressCountry: "PK",
    },
  };
}

export function getFutureFluxProjectJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Future Flux",
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    description:
      "A full-stack blogging platform built with Next.js, React, and MongoDB with secure auth, CRUD posts, and category-based discovery.",
    creator: {
      "@type": "Person",
      name: "Muhammad Asadullah Khan",
    },
    url: "https://futureflux1.vercel.app/",
  };
}

