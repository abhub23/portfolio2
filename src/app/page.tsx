import { ArrowUpRight, Sunrise } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import LocalTime from "@/components/local-time";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex flex-row items-start justify-between gap-2">
            <div className="flex min-w-0 flex-col gap-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="pt-1 font-semibold text-3xl tracking-tighter sm:pt-4 sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="inline-flex w-full max-w-full items-center justify-center gap-1.5 rounded-full bg-muted/60 px-2.5 py-1.5 text-sm sm:w-fit sm:justify-start sm:gap-2 sm:px-3">
                  <span className="size-2 shrink-0 rounded-full bg-green-500" />
                  <span className="font-medium">{DATA.location}</span>
                  <span className="text-muted-foreground">·</span>
                  <Sunrise
                    className="hidden size-4 shrink-0 text-muted-foreground sm:block"
                    aria-hidden
                  />
                  <span className="whitespace-nowrap text-muted-foreground">
                    <LocalTime timeZone="Asia/Kolkata" />
                  </span>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="flex-none">
              <Avatar className="size-20 rounded-full border shadow-lg md:size-32">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="font-bold text-xl">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose dark:prose-invert max-w-full text-pretty font-sans text-muted-foreground leading-relaxed">
              <Markdown
                components={{
                  a: ({ href, children }) => {
                    const isExternal = href?.startsWith("http");
                    return (
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="font-normal"
                      >
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="font-bold text-xl">Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="font-bold text-xl">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-x-3"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <Image
                        src={education.logoUrl}
                        alt={education.school}
                        width={44}
                        height={44}
                        unoptimized
                        className="size-9 flex-none overflow-hidden rounded-full object-contain object-center p-1 md:size-11"
                      />
                    ) : (
                      <div className="size-9 flex-none rounded-full bg-muted md:size-11" />
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-muted-foreground text-sm">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-none items-center gap-1 text-right text-muted-foreground text-xs tabular-nums">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="font-bold text-xl">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                  {skill.icon && (
                    <skill.icon className="size-4 overflow-hidden rounded object-contain" />
                  )}
                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      {/* <section id="open-source">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <OpenSourceSection />
        </BlurFade>
      </section> */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
