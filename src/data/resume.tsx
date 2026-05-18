import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Redis } from "@/components/ui/svgs/redis";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";


export const DATA = {
  name: "Abdullah Mukri",
  initials: "AB",
  url: "https://abdullahtech.dev",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-stack Software Engineer crafting products with extreme ownership of what I build from architecture to deployment. Open to connect.",
  summary:
    "I'm a Full-stack Software Engineer and was a Founding Engineer at [Sylow AI](https://sylow.ai). I believe in the **build fast, ship faster** mindset. I've built products used by thousands of developers, including [Purge AI](https://purgeai.abdullahtech.dev). When I'm not coding, I'm either reading or writing [blogs](/blog) about tech and what I learn. Here's my [ resume](https://drive.google.com/file/d/1JMsQveOQ3ir0tZxdcCXKVOcNYsx6_l6u/view)",
  avatarUrl: "/pf.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Redis", icon: Redis }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhub23",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/abdullah-mukri",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abdullah_twt23",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sylow AI",
      href: "https://sylow.ai",
      badges: [],
      location: "Remote",
      title: "Fullstack Software Engineer",
      logoUrl: "/company/sylow.png",
      start: "Oct 2025",
      end: "Feb 2025",
      description:
        "Designed RAG pipelines for enterprise document retrieval, enabling accurate context-aware responses across large knowledge bases. Built AI agents that automated complex multi-step workflows, reducing manual overhead significantly.",
    },
    {
      company: "Kanexon Inc",
      badges: [],
      href: "https://kanexon.com",
      location: "Remote",
      title: "Fullstack Software Developer",
      logoUrl: "/company/kanexon.png",
      start: "Feb 2025",
      end: "June 2025",
      description:
        "Developed full-stack web applications using React and Node.js, delivering scalable features for client-facing platforms. Collaborated cross-functionally to ship products on tight deadlines while maintaining high code quality.",
    },
    {
      company: "Oasis Infobyte",
      href: "https://www.oasisinfobyte.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Development Engineer, Intern",
      logoUrl: "/company/oasis.jpg",
      start: "Oct 2023",
      end: "Apr 2024",
      description:
        "Developed and shipped responsive web interfaces and RESTful APIs using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver features in an agile environment.",
    },
  ],
  education: [
    {
      school: "University of Mumbai",
      href: "https://www.linkedin.com/school/university-of-mumbai/",
      degree: "Bachelor's of Computer Science",
      logoUrl: "/mu.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  openSource: [
    {
      name: "Next.js",
      href: "https://nextjs.org",
      description: "Contributed to documentation improvements",
      dates: "2024",
    },

  ],
  projects: [
    {
      title: "Purge AI",
      href: "https://purgeai.abdullahtech.dev",
      dates: "June 2025 - Oct 2025",
      active: true,
      description:
        "Purge AI is an AI-powered tool that analyzes GitHub PRs using LLMs and metadata extraction. It streamlines developer workflows with accurate labeling, concise summaries, and dynamic adaptation to different repositories, boosting speed, consistency, and review efficiency.",
      technologies: [
        "Typescript",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://purgeai.abdullahtech.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhub23/purge.ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/purgeai.png",
    },
    {
      title: "Privado",
      href: "https://privado.abdullahtech.dev",
      dates: "June 2025 - August 2025",
      active: true,
      description:
        "Privado is a fast, secure private chat app powered by Socket.IO. Instantly connect, message friends, and enjoy real-time private conversations with no distractions. Simple, smooth, and built for people who value privacy and speed.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "Web Sockets",
        "TailwindCSS",
        "Socket.IO",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://privado.abdullahtech.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhub23/Web-Socket-Server-Sets",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/privado.png",
    },
    {
      title: "GitHub Metrics",
      href: "https://githubstats.abdullahtech.dev",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Now you can Compare your Github Stats with the best in the world, be it Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? have better PR's than someone? Lets see here mate.",
      technologies: [
        "Typescript",
        "React",
        "Express",
        "TailwindCSS",
        "Vite",
        "Gemini",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://githubstats.abdullahtech.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhub23/Github-Metrics",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Draw",
      href: "https://draw.abdullahtech.dev",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Draw app that lets you sketch freely with smooth strokes, vibrant colors, and an intuitive interface, delivering a fast, minimal, and immersive digital drawing experience.",
      technologies: [
        "Typescript",
        "Next js",
        "React",
        "Canvas",
        "TailwindCSS",
        "Vercel",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://draw.abdullahtech.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhub23/draw",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
  ],
}
