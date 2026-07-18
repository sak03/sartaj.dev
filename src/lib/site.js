export const SITE_URL = "https://sartajalam.in";

export const siteConfig = {
  name: "Sartaj Alam",
  title: "Sartaj Alam — Full Stack Web Developer",
  description:
    "Portfolio of Sartaj Alam, a full stack web developer building fast, accessible products with React, Next.js, Laravel, Node.js, and modern frontend systems.",
  email: "sartaj2394@gmail.com",
  social: {
    github: "https://github.com/sak03",
    linkedin: "https://www.linkedin.com/in/sak03/",
    x: "https://x.com/sartaj_03",
  },
};

// Only discovery-card information lives here. Every article owns its layout,
// content and metadata inside app/blogs/<slug>/page.js.
export const blogPosts = [
  {
    slug: "how-ai-is-evolving-in-2026",
    index: "04",
    title: "AI in 2026: From Chatbots to Teammates That Take Action",
    excerpt:
      "AI is moving beyond answers and into workflows. A grounded look at agents, multimodal systems, work, trust, and the skills that matter next.",
    category: "Artificial Intelligence",
    date: "2026-07-18",
    dateLabel: "18 Jul 2026",
    readTime: "9 min read",
    featured: true,
    palette: "from-violet-950 via-indigo-900 to-cyan-700",
  },
  {
    slug: "getting-started-nextjs",
    index: "01",
    title: "Getting Started with Next.js: A Practical Beginner Guide",
    excerpt:
      "Learn the App Router, layouts, rendering choices, metadata, and a reliable way to structure your first production-ready Next.js app.",
    category: "Next.js",
    date: "2026-03-20",
    dateLabel: "20 Mar 2026",
    readTime: "7 min read",
    palette: "from-slate-950 via-blue-950 to-blue-600",
  },
  {
    slug: "understanding-react-server-components",
    index: "02",
    title: "React Server Components, Explained Without the Hype",
    excerpt:
      "A clear mental model for server and client boundaries, smaller browser bundles, and architecture that stays understandable.",
    category: "React Architecture",
    date: "2026-03-15",
    dateLabel: "15 Mar 2026",
    readTime: "6 min read",
    palette: "from-slate-950 via-emerald-950 to-emerald-600",
  },
  {
    slug: "deploying-nextjs-static-sites",
    index: "03",
    title: "Deploying Next.js Static Sites Without Build Surprises",
    excerpt:
      "A field guide to static export, pre-generated routes, asset paths, and the small mismatches that usually break deployment.",
    category: "Deployment",
    date: "2026-03-10",
    dateLabel: "10 Mar 2026",
    readTime: "8 min read",
    palette: "from-stone-950 via-rose-950 to-rose-700",
  },
];
