import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import Landing from "@/components/home/Landing";
import WorkExp from "@/components/home/WorkExp";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Landing />
            <WorkExp />
            <HomeProjects />
            <HomeSkills />
        </div>
    );
}
