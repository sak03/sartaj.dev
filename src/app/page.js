import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import Landing from "@/components/home/Landing";
import HomeWorkExp from "@/components/home/HomeWorkExp";
import HomeBlogs from "@/components/home/HomeBlogs";

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
            <section aria-label="Blogs Section" className="main-content-centered">
                <HomeBlogs />
            </section>
        </>
    );
}
