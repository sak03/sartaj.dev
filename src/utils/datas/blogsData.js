export const blogsData = [
    {
        id: "blog01",
        slug: "getting-started-nextjs",
        title: "Getting Started with Next.js: A Complete Beginner Guide",
        date: "2026-03-20",
        author: "Sartaj Alam",
        readTime: "7 min read",
        category: "Web Development",
        tags: ["Next.js", "React", "Frontend"],
        coverLabel: "Next.js Fundamentals",
        coverPalette: {
            from: "#0f172a",
            to: "#2563eb",
            accent: "#bfdbfe",
        },
        shortDescription:
            "A practical beginner guide to Next.js covering routing, data fetching, layouts, and the mindset needed to build production-ready apps.",
        seo: {
            metaTitle: "Getting Started with Next.js - Complete Beginner Guide",
            metaDescription:
                "Learn the fundamentals of Next.js with routing, layouts, data fetching, and deployment tips in one practical beginner guide.",
        },
        intro:
            "Next.js becomes much easier when you stop seeing it as a big framework and start seeing it as a set of strong defaults for real-world React apps. This guide focuses on the pieces that actually matter when you are building your first project.",
        keyTakeaways: [
            "Understand how file-based routing works in the App Router.",
            "Know when to use static rendering and when dynamic data is needed.",
            "Set up layouts and reusable UI without repeating page structure.",
            "Build with performance and SEO in mind from the beginning.",
        ],
        sections: [
            {
                title: "Why developers like Next.js",
                paragraphs: [
                    "Next.js gives you a solid application structure out of the box. You get routing, layouts, metadata support, server rendering, static generation, and asset optimization without stitching together multiple tools yourself.",
                    "That matters because most frontend projects eventually need more than components. They need pages, loading states, SEO, performance, and deployment-friendly output. Next.js helps you solve those problems earlier and with less glue code.",
                ],
                bullets: [
                    "Fast routing with the App Router",
                    "Better SEO through server rendering and metadata",
                    "Easy co-location of UI and route logic",
                    "Strong defaults for images, fonts, and performance",
                ],
            },
            {
                title: "A simple mental model for the app folder",
                paragraphs: [
                    "Inside the `app` directory, folders usually represent URL segments and `page.js` files represent the screen for that route. If you create `app/about/page.js`, Next.js automatically creates the `/about` route.",
                    "You can also add `layout.js` files to share UI between related pages. This keeps your navigation, wrappers, and common structure in one place instead of repeating them across every screen.",
                ],
                code: `app/\n  page.js\n  about/\n    page.js\n  blog/\n    [blogId]/\n      page.js`,
            },
            {
                title: "Rendering and data fetching without confusion",
                paragraphs: [
                    "One of the biggest beginner hurdles is understanding rendering modes. The simple version is this: if your content can be prepared ahead of time, static rendering is usually the best default because it is fast and works great for SEO.",
                    "If the page depends on frequently changing data or request-time information, you can move toward dynamic rendering. The key is to choose the simplest approach that matches the content lifecycle of your page.",
                ],
                bullets: [
                    "Use static rendering for blogs, portfolio pages, and documentation-like content.",
                    "Use dynamic rendering for dashboards or user-specific data.",
                    "For exported sites, dynamic routes need `generateStaticParams()`.",
                ],
            },
            {
                title: "What to focus on in your first project",
                paragraphs: [
                    "Do not try to learn every Next.js feature at once. Start with routing, layouts, data organization, and clean component boundaries. Once that feels natural, move on to metadata, image optimization, and server actions.",
                    "A small but complete project teaches more than a dozen isolated examples. Build something that has a homepage, a list page, a dynamic detail page, and a consistent layout. That is where the framework starts to click.",
                ],
            },
        ],
        closing:
            "Next.js rewards clear structure. If you focus on route organization, reusable layouts, and predictable data flow, the framework will feel less like magic and more like a very reliable toolbox.",
    },
    {
        id: "blog02",
        slug: "understanding-react-server-components",
        title: "Understanding React Server Components Without the Hype",
        date: "2026-03-15",
        author: "Sartaj Alam",
        readTime: "6 min read",
        category: "React Architecture",
        tags: ["React", "Server Components", "Performance"],
        coverLabel: "Server Components",
        coverPalette: {
            from: "#1f2937",
            to: "#059669",
            accent: "#a7f3d0",
        },
        shortDescription:
            "A clear explanation of what Server Components solve, where they fit, and how they change the way we think about React app architecture.",
        seo: {
            metaTitle: "Understanding React Server Components",
            metaDescription:
                "Learn what React Server Components are, what problems they solve, and how to use them with better architectural judgment.",
        },
        intro:
            "Server Components are often described in very abstract terms, which makes them feel more complicated than they need to be. The practical idea is simpler: move work to the server when the browser does not need to do it.",
        keyTakeaways: [
            "Server Components help reduce unnecessary client-side JavaScript.",
            "They are best for data-heavy, non-interactive UI.",
            "Client Components still matter for interactivity and browser state.",
            "The real value is architectural clarity, not just performance metrics.",
        ],
        sections: [
            {
                title: "What problem do Server Components solve",
                paragraphs: [
                    "Traditional React apps often send too much JavaScript to the browser, even for UI that could have been prepared on the server. That means users pay the cost for downloading, parsing, and hydrating code that may not need to run on the client at all.",
                    "Server Components let you keep data access and heavy preparation on the server while still composing UI in a React-friendly way. The result is often a lighter client bundle and a cleaner separation between data work and interactivity.",
                ],
            },
            {
                title: "When a Client Component is still the right choice",
                paragraphs: [
                    "The browser is still the right home for interactive UI. If a component needs click handlers, local state, browser APIs, or effects, it belongs on the client.",
                    "A good rule of thumb is to use Server Components by default for display and data composition, then add Client Components only where interaction begins.",
                ],
                bullets: [
                    "Forms with live validation",
                    "Dropdowns, modals, and tabs",
                    "Components using `useState` or `useEffect`",
                    "Anything that depends on browser-only APIs",
                ],
            },
            {
                title: "Why this changes architecture",
                paragraphs: [
                    "Server Components encourage you to think in boundaries. Instead of putting data fetching deep inside client code, you can pull data close to the route or server-rendered section and pass only the necessary props into smaller interactive islands.",
                    "That structure usually improves both maintainability and performance. Your data layer gets easier to reason about, and your interactive components become more focused.",
                ],
            },
        ],
        closing:
            "Server Components are not about replacing client-side React. They are about being more intentional about where work should happen, and that makes modern React apps easier to scale.",
    },
    {
        id: "blog03",
        slug: "deploying-nextjs-static-sites",
        title: "Deploying a Next.js Static Site Without Build-Time Surprises",
        date: "2026-03-10",
        author: "Sartaj Alam",
        readTime: "8 min read",
        category: "Deployment",
        tags: ["Next.js", "Deployment", "Static Export"],
        coverLabel: "Static Export Workflow",
        coverPalette: {
            from: "#3f0d12",
            to: "#a71d31",
            accent: "#fecaca",
        },
        shortDescription:
            "A practical walkthrough for shipping a statically exported Next.js site, with attention to dynamic routes, asset paths, and the mistakes that usually break builds.",
        seo: {
            metaTitle: "Deploying a Next.js Static Site",
            metaDescription:
                "Learn how to deploy a statically exported Next.js site and avoid common issues with dynamic routes, assets, and build configuration.",
        },
        intro:
            "Static export is a great fit for portfolios, blogs, and content-driven sites, but it asks you to be disciplined about routing and data. Most build-time errors are not random. They happen because a route expects runtime information that is not available during export.",
        keyTakeaways: [
            "Dynamic routes must be pre-generated during build time.",
            "Local assets and route paths need to be consistent and predictable.",
            "Static export works best when your content comes from local data or build-time fetches.",
            "A successful export usually starts with simplifying the data model.",
        ],
        sections: [
            {
                title: "What export mode expects from your app",
                paragraphs: [
                    "When you use static export, Next.js needs to know every page it should generate ahead of time. That is why dynamic routes such as `/blog/[blogId]` need a `generateStaticParams()` function.",
                    "If your route depends on values that only exist at request time, export mode cannot produce those pages. The route has to become deterministic at build time.",
                ],
            },
            {
                title: "Common reasons builds fail",
                paragraphs: [
                    "Many export issues come from small mismatches: incorrect file names, inconsistent slugs, links using one identifier while detail pages look up another, or assets pointing to files that do not exist.",
                    "These errors are frustrating because the UI may look almost done, but the build pipeline exposes assumptions that the app structure is not actually satisfying.",
                ],
                bullets: [
                    "Wrong import paths",
                    "Missing `generateStaticParams()` for dynamic routes",
                    "Linking with `slug` but finding data with `id`",
                    "Broken image paths or missing public assets",
                ],
            },
            {
                title: "A reliable workflow for small portfolio sites",
                paragraphs: [
                    "Keep data in local files, define stable `id` and `slug` values, and make sure list pages and detail pages agree on which key they use. That one discipline removes a huge amount of routing confusion.",
                    "Once routes are stable, verify the build regularly instead of waiting until the end. A quick production build catches export-specific issues long before deployment day.",
                ],
                code: `export function generateStaticParams() {\n  return blogsData.map((blog) => ({ blogId: blog.slug }));\n}`,
            },
        ],
        closing:
            "Static export feels strict, but the upside is clarity. When the app builds cleanly, you usually end up with a codebase that is more consistent, more portable, and easier to maintain.",
    },
];
