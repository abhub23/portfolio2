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
    "I'm a Full-stack Software Engineer and was a Founding Engineer at [Sylow AI](https://atomic.finance). I believe in the **build fast, ship faster** mindset. I've built products used by thousands of developers, including [Purge AI](https://purgeai.abdullahtech.dev). When I'm not coding, I'm either [writing blogs](/blog) about what I learn, or competing in hackathons for fun. [Here's my resume](/resume.pdf)",
  avatarUrl: "/me.jpeg",
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
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Kanexon Inc",
      badges: [],
      href: "https://kanexon.com",
      location: "Remote",
      title: "Fullstack Software Engineer",
      logoUrl: "/company/kanexon.png",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Oasis Infobyte",
      href: "https://www.oasisinfobyte.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer, Intern",
      logoUrl: "/company/oasis.jpg",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
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
    {
      name: "React",
      href: "https://react.dev",
      description: "Bugfix contributions in issue tracking",
      dates: "2023",
    },
  ],
  projects: [
    {
      title: "Purge AI",
      href: "https://purgeai.abdullahtech.dev",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Purge AI is an AI-powered tool that analyzes GitHub PRs using LLMs and metadata extraction. It streamlines developer workflows with accurate labeling, concise summaries, and dynamic adaptation to different repositories, boosting speed, consistency, and review efficiency.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Privado",
      href: "https://privado.abdullahtech.dev",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Privado is a fast, secure private chat app powered by Socket.IO. Instantly connect, message friends, and enjoy real-time private conversations with no distractions. Simple, smooth, and built for people who value privacy and speed.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "GitHub metrics",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Now you can Compare your Github Stats with the best in the world, be it Torvalds, Karpathy, Harkirat and who not. You think you're doing your best? have better PR's than someone? Lets see here mate.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhub23",
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
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
  ],
}
