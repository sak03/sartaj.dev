import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import Landing from "@/components/home/Landing";
import HomeWorkExp from "@/components/home/HomeWorkExp";

export default function Home() {
    return (
        <>
            <section aria-label="Landing Section" className="landing-full-width">
                <Landing />
            </section>
            <section aria-label="Work Experience Section" className="main-content-centered">
                <HomeWorkExp />
            </section>
            <section aria-label="Projects Section" className="main-content-centered">
                <HomeProjects />
            </section>
            <section aria-label="Skills Section" className="main-content-centered">
                <HomeSkills />
            </section>
        </>
    );
}
