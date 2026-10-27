import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

export const dynamic = "force-static";

export function GET() {
  const posts = [...allPosts]
    .sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))
    .map((post) => {
      const slug = post._meta.path.replace(/\.mdx$/, "");
      return `- [${post.title}](${DATA.url}/blog/${slug}): ${post.summary}`;
    })
    .join("\n");

  const profiles = Object.values(DATA.contact.social)
    .filter((social) => social.url !== "#")
    .map((social) => `- [${social.name}](${social.url})`)
    .join("\n");

  const work = DATA.work
    .map(
      (job) =>
        `- **${job.title} at [${job.company}](${job.href})** (${job.start} – ${job.end}, ${job.location}): ${job.description}`
    )
    .join("\n");

  const education = DATA.education
    .map((edu) => `- **[${edu.school}](${edu.href})** (${edu.start} – ${edu.end}): ${edu.degree}`)
    .join("\n");

  const projects = DATA.projects
    .map((project) => {
      const sourceLink = project.links?.find((link) => link.type === "Source");
      const links = [
        `[Website](${project.href})`,
        sourceLink ? `[Source](${sourceLink.href})` : null,
      ]
        .filter(Boolean)
        .join(" · ");
      return `- **[${project.title}](${project.href})** (${project.dates}) — ${project.description}\n  Tech: ${project.technologies.join(", ")}\n  Links: ${links}`;
    })
    .join("\n");

  const content = [
    `# ${DATA.name}`,
    "",
    `> ${DATA.headline} based in ${DATA.location}. Previously Founding Engineer at Sylow AI.`,
    "> This is his personal portfolio and blog, where he learns out loud about software",
    "> engineering, TypeScript, and system design.",
    "",
    "## Pages",
    "",
    `- [Home](${DATA.url}/): About, work experience, education, skills, projects, and contact.`,
    `- [Blog](${DATA.url}/blog): Index of all blog posts.`,
    "",
    "## Experience",
    "",
    work,
    "",
    "## Education",
    "",
    education,
    "",
    "## Projects",
    "",
    projects,
    "",
    "## Blog posts",
    "",
    posts,
    "",
    "## Profiles",
    "",
    profiles,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
