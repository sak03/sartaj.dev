import { SITE_URL, blogPosts } from "@/lib/site";
import { personalProjectsData, corporateProjectsData } from "@/utils/datas/projectsData";
import { workData } from "@/utils/datas/workExpData";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/skills",
  "/work-experiences",
  "/blogs",
  "/contact",
];

export default function sitemap() {
  const pages = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/blogs" ? 0.8 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  const projects = [...personalProjectsData, ...corporateProjectsData].map((project) => ({
    url: `${SITE_URL}/project/${project.id}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const experiences = workData.map((experience) => ({
    url: `${SITE_URL}/work-experience/${experience.slug}`,
    lastModified: new Date("2026-07-18"),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...posts, ...projects, ...experiences];
}
