import publicLibraryImg from '../../assets/projects/personal/public-library.png';
import tictactoeImg from '../../assets/projects/personal/tictactoe.png';
import devtoolsImg from '../../assets/projects/personal/devtools.png';
import resumeLabImg from '../../assets/projects/personal/resume-lab.png';
import wordChainImg from '../../assets/projects/personal/word-chain.png';

export const personalProjectsData = [
    {
        id: "pp04",
        slug: "devtools",
        name: "DevTools",
        type: "Personal Project",
        imgUrl: devtoolsImg,
        repoUrl: "",
        liveUrl: "https://devtools.sartajalam.in",
        stDate: "2026",
        endDate: "Present",
        role: "Full Stack Developer",
        status: "Live",
        shortDescription:
            "A private browser workspace with 25+ everyday developer utilities — format, encode, and decode without leaving the tab.",
        longDescription:
            "DevTools is a free collection of client-side developer utilities built for speed and privacy. Transforms run instantly in the browser, search is keyboard-first, and pasted data never leaves the tab. It covers encode/decode, formatters, text tools, timestamps, hashing, and more in one dense IDE-style workspace.",
        problem:
            "Developers bounce between scattered online tools that often upload input to a server. Everyday tasks like Base64, JSON format, JWT inspect, and diff need to stay fast and private.",
        solution:
            "I built a single private workspace where every utility runs locally, with ⌘K search, clear shortcuts, and a consistent UI so switching tools feels instant and trustworthy.",
        outcome:
            "Shipped a live product at devtools.sartajalam.in with 25 tools, privacy-first processing, and a keyboard-driven developer experience.",
        techStack: ["Next.js", "React", "JavaScript", "CSS"],
        features: [
            "25+ browser-only developer utilities",
            "Encode/decode, formatters, and text tools",
            "Keyboard-first search (⌘K)",
            "Local-only processing — nothing uploaded",
        ],
        responsibilities: [
            "Designed and built the full product UI",
            "Implemented client-side tool logic and search",
            "Shipped and hosted the live site",
        ],
        metrics: [
            { label: "Status", value: "Live" },
            { label: "Tools", value: "25+" },
            { label: "Privacy", value: "Local-only" },
        ],
    },
    {
        id: "pp05",
        slug: "resume-lab",
        name: "Resume Lab",
        type: "Personal Project",
        imgUrl: resumeLabImg,
        repoUrl: "",
        liveUrl: "https://resume.sartajalam.in",
        stDate: "2026",
        endDate: "Present",
        role: "Full Stack Developer",
        status: "Live",
        shortDescription:
            "A free browser resume builder and CV maker with live preview, multiple templates, and one-click PDF export — no account required.",
        longDescription:
            "Resume Lab lets you choose a template, fill in details, preview live, and export a clean PDF entirely in the browser. Drafts stay in local storage, nothing is uploaded to a server, and six templates cover simple, medium, advanced, and custom layouts.",
        problem:
            "Many resume builders require accounts, store personal data on servers, or add friction before a usable PDF. Job seekers need a fast, private path from draft to print-ready resume.",
        solution:
            "I built a privacy-first builder with local drafts, live A4 preview, multiple templates, and PDF download via the browser print dialog — no signup and no database.",
        outcome:
            "Shipped a live free product at resume.sartajalam.in with six templates, browser-only drafts, and job-ready PDF export.",
        techStack: ["Next.js", "React", "JavaScript", "CSS"],
        features: [
            "Six resume/CV templates",
            "Live preview while editing",
            "Local storage drafts — clear anytime",
            "Print-optimized A4 PDF export",
        ],
        responsibilities: [
            "Designed the builder UX and template system",
            "Implemented draft persistence and PDF export flow",
            "Shipped and hosted the live site",
        ],
        metrics: [
            { label: "Status", value: "Live" },
            { label: "Templates", value: "6" },
            { label: "Privacy", value: "Browser-only" },
        ],
    },
    {
        id: "pp06",
        slug: "word-chain-challenge",
        name: "Word Chain Challenge",
        type: "Personal Project",
        imgUrl: wordChainImg,
        repoUrl: "",
        liveUrl: "https://wordchain.sartajalam.in",
        stDate: "2026",
        endDate: "Present",
        role: "Frontend Developer",
        status: "Live",
        shortDescription:
            "A friendly word-chain game — play solo with WordBot or take turns with a friend, all in the browser.",
        longDescription:
            "Word Chain Challenge is a quick word-linking game for curious minds. Pick a mode, add your name, and keep the chain alive: each word must start from the previous ending. Play solo against WordBot or pass turns with a friend. Scoring is simple (+1 correct, −1 pass), and the game stays only on the device.",
        problem:
            "Casual word games often feel heavy with accounts, ads, or confusing rules. Players need a light challenge that is easy to start and fun to share on one device.",
        solution:
            "I built a clear two-step setup — choose solo or friend mode, enter a name, then start — with readable scoring, light/dark theme, and local-only play so nothing needs a backend.",
        outcome:
            "Shipped a live game at wordchain.sartajalam.in with solo and friend modes, device-local play, and a clean challenge-focused UI.",
        techStack: ["Next.js", "React", "JavaScript", "CSS"],
        features: [
            "Solo play with WordBot or friend turn-taking",
            "Simple scoring for correct words and passes",
            "Light and dark theme toggle",
            "Game state stays on this device only",
        ],
        responsibilities: [
            "Designed the landing and game setup UX",
            "Implemented play modes and scoring feedback",
            "Shipped and hosted the live game",
        ],
        metrics: [
            { label: "Status", value: "Live" },
            { label: "Modes", value: "Solo + Friend" },
            { label: "Privacy", value: "Device-local" },
        ],
    },
    {
        id: "pp01",
        slug: "student-registration",
        name: "Student Registration",
        type: "Personal Project",
        imgUrl: publicLibraryImg,
        repoUrl: "",
        liveUrl: "",
        stDate: "Jul 2023",
        endDate: "Jan 2025",
        role: "Full Stack Developer",
        status: "Case study",
        shortDescription:
            "A structured student onboarding flow focused on clean form handling, validation-ready UI, and maintainable data screens.",
        longDescription:
            "Student Registration is a practical admin-style project built to practice reliable form UX, reusable screen structure, and clear data presentation. The goal was to create a simple flow that can grow into a real school or coaching institute management module.",
        problem:
            "Most small education workflows start with scattered student details and no predictable onboarding pattern. The UI needed to make registration fast, readable, and easier to maintain.",
        solution:
            "I designed the experience around clear input grouping, predictable page states, and component-level separation so future features like search, edit, export, and API integration can be added without rewriting the screen.",
        outcome:
            "Created a scalable base for registration workflows with a clean UI structure and reusable frontend patterns.",
        techStack: ["Next.js", "React", "JavaScript", "Bootstrap", "SCSS"],
        features: [
            "Student onboarding flow",
            "Reusable layout sections",
            "Responsive form-first interface",
            "Validation-ready structure",
        ],
        responsibilities: [
            "Planned the screen structure and user flow",
            "Built the frontend UI from scratch",
            "Prepared the component structure for future backend integration",
        ],
        metrics: [
            { label: "Role", value: "End-to-end UI" },
            { label: "Focus", value: "Forms" },
            { label: "Device", value: "Responsive" },
        ],
    },
    {
        id: "pp02",
        slug: "tic-tac-toe",
        name: "Tic Tac Toe",
        type: "Personal Project",
        imgUrl: tictactoeImg,
        repoUrl: "",
        liveUrl: "",
        stDate: "Jul 2023",
        endDate: "Aug 2023",
        role: "Frontend Developer",
        status: "Playable UI",
        shortDescription:
            "A compact interactive game built to practice state management, turn handling, and simple game logic in React.",
        longDescription:
            "Tic Tac Toe is a small but useful project for demonstrating interaction quality. It focuses on predictable state transitions, instant feedback, and a clean visual board that works well across devices.",
        problem:
            "Game UIs become confusing quickly when state transitions are not handled cleanly. The challenge was to keep turns, win states, and reset behavior easy to understand.",
        solution:
            "I kept the board state explicit, separated display concerns from game decisions, and built the UI so users always understand whose turn it is and what happened.",
        outcome:
            "Built a lightweight interactive project that demonstrates React state handling and user feedback patterns.",
        techStack: ["React", "JavaScript", "CSS", "Game Logic"],
        features: [
            "Turn-based interaction",
            "Winner detection",
            "Reset flow",
            "Responsive board layout",
        ],
        responsibilities: [
            "Implemented the board and game state",
            "Handled win/draw feedback",
            "Designed a compact responsive interface",
        ],
        metrics: [
            { label: "Logic", value: "Client-side" },
            { label: "State", value: "React" },
            { label: "UX", value: "Instant" },
        ],
    },
    {
        id: "pp03",
        slug: "public-library",
        name: "Public Library",
        type: "Personal Project",
        imgUrl: publicLibraryImg,
        repoUrl: "",
        liveUrl: "https://sak03.github.io/publicLibrary/",
        stDate: "Sep 2023",
        endDate: "Oct 2023",
        role: "Frontend Developer",
        status: "Live",
        shortDescription:
            "A public-library themed web interface with responsive pages, clean navigation, and content-first presentation.",
        longDescription:
            "Public Library is a content-focused frontend project. I used it to practice clean page hierarchy, simple navigation, and a layout that makes library information easy to scan.",
        problem:
            "Library-style websites need to show categories, services, and useful information without feeling cluttered. The priority was clarity over decoration.",
        solution:
            "I designed a readable page structure with clear content blocks, responsive spacing, and direct navigation so visitors can understand the site quickly.",
        outcome:
            "Delivered a live static frontend that demonstrates responsive UI structure and content organization.",
        techStack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
        features: [
            "Responsive static pages",
            "Content-first sections",
            "Simple navigation",
            "Hosted live demo",
        ],
        responsibilities: [
            "Created the complete frontend",
            "Structured content sections",
            "Published the project as a live demo",
        ],
        metrics: [
            { label: "Status", value: "Live" },
            { label: "Pages", value: "Static" },
            { label: "Focus", value: "Content" },
        ],
    },
];

export const corporateProjectsData = [
    {
        id: "cp01",
        slug: "pvr-cinemas",
        name: "PVR Cinemas",
        type: "Corporate Project",
        imgUrl: null,
        repoUrl: "",
        liveUrl: "",
        stDate: "Jul 2023",
        endDate: "Jan 2025",
        role: "Frontend Developer",
        status: "Professional work",
        shortDescription:
            "Contributed to production-level frontend work with responsive UI, reusable components, and API-connected screens.",
        longDescription:
            "This corporate project represents frontend delivery in a professional environment. The work focused on building maintainable UI pieces, integrating backend data, and supporting production expectations across devices.",
        problem:
            "Production interfaces need consistency, performance, and careful integration with real backend flows. Small UI decisions affect both users and maintenance.",
        solution:
            "I worked with reusable frontend patterns, responsive layouts, and API-ready components while keeping the implementation practical for team collaboration.",
        outcome:
            "Contributed to a real-world frontend codebase with focus on reliability, responsiveness, and maintainability.",
        techStack: ["React", "Next.js", "JavaScript", "TypeScript", "Bootstrap"],
        features: [
            "Responsive production UI",
            "Reusable components",
            "API integration support",
            "Cross-device layout handling",
        ],
        responsibilities: [
            "Built and maintained frontend screens",
            "Collaborated with backend and design teams",
            "Improved UI consistency across modules",
        ],
        metrics: [
            { label: "Work", value: "Production" },
            { label: "Role", value: "Frontend" },
            { label: "Team", value: "Collaborative" },
        ],
    },
];
