import publicLibraryImg from '../../assets/projects/personal/public-library.png';
import tictactoeImg from '../../assets/projects/personal/tictactoe.png';

export const personalProjectsData = [
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
