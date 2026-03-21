// front end image import
// import Image from 'next/image';
// import smallNextImg from '../../assets/skills/fe/small-nextjs.png';
// import smallReactImg from '../../assets/skills/fe/small-reactjs.png';
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPhp, SiLaravel } from "react-icons/si";


export const frontEndSkills = [
    {
        id:"fes01",
        title:"NextJS",
        icon: <SiNextdotjs/>,
        largeImgUrl:"",
        officialUrl: "https://nextjs.org/",
        shortDescription:"Next.js is a powerful React framework that enables server-side rendering and static site generation, making it ideal for building fast and SEO-friendly web applications."
    },
    {
        id: "fes02",
        title: "ReactJS",
        icon: <FaReact />,
        largeImgUrl: "",
        officialUrl: "https://react.dev/",
        shortDescription: "React.js is a popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering, making it a top choice for front-end development."
    },
    {
        id: "fes03",
        title: "JavaScript",
        icon: <FaJsSquare />,
        largeImgUrl: "",
        officialUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        shortDescription: "JavaScript is a versatile programming language that enables interactive web development, allowing developers to create dynamic and responsive user interfaces across various platforms."
    },
    {
        id: "fes04",
        title: "TypeScript",
        icon: <SiTypescript />,
        largeImgUrl: "",
        officialUrl: "https://www.typescriptlang.org/",
        shortDescription: "TypeScript is a statically typed superset of JavaScript that adds optional types, enhancing code quality and maintainability while providing powerful tooling for large-scale applications."
    },
    {
        id: "fes05",
        title: "Redux",
        icon: <SiRedux />,
        largeImgUrl: "",
        officialUrl: "https://redux.js.org/",
        shortDescription: "Redux is a predictable state management library for JavaScript applications, commonly used with React to manage application state in a centralized and efficient manner."
    },
    {
        id: "fes06",
        title: "Context API",
        icon: <FaReact />,
        largeImgUrl: "",
        officialUrl: "https://react.dev/reference/react/createContext",
        shortDescription: "The Context API is a React feature that allows developers to share state across the component tree without prop drilling, making it easier to manage global state in React applications."
    },
]

export const backEndSkills = [
    {
        id: "bes01",
        title: "NodeJS",
        icon: <SiNodedotjs />,
        largeImgUrl: "",
        officialUrl: "https://nodejs.org/",
        shortDescription: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling developers to run JavaScript on the server-side and build scalable network applications."
    },
    {
        id: "bes02",
        title: "ExpressJS",
        icon: <SiExpress />,
        largeImgUrl: "",
        officialUrl: "https://expressjs.com/",
        shortDescription: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications, making it a popular choice for backend development."
    },
    {
        id: "bes03",
        title: "PHP",
        icon: <SiPhp />,
        largeImgUrl: "",
        officialUrl: "https://www.php.net/",
        shortDescription: "PHP is a widely-used open-source scripting language that is especially suited for web development and can be embedded into HTML, making it a popular choice for server-side programming."
    },
    {
        id: "bes04",
        title: "Laravel",
        icon: <SiLaravel />,
        largeImgUrl: "",
        officialUrl: "https://laravel.com/",
        shortDescription: "Laravel is a popular PHP web application framework that provides a robust set of features for building modern web applications, making it a preferred choice for backend development."

    },
];

export const databaseSkills = [
    {
        id: "fes09",
        title: "MongoDB",
        icon: <SiMongodb />,
        largeImgUrl: "",
        officialUrl: "https://www.mongodb.com/",
        shortDescription: "MongoDB is a popular NoSQL database that provides high performance, high availability, and easy scalability for modern web applications."
    },
    {
        id: "fes10",
        title: "MySQL",
        icon: <SiMysql />,
        largeImgUrl: "",
        officialUrl: "https://www.mysql.com/",
        shortDescription: "MySQL is a widely-used open-source relational database management system that provides a robust and scalable solution for storing and managing structured data in web applications."
    },
];
