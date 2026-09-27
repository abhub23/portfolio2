import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="overflow-hidden">
      <div className="flex min-h-0 w-full flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-5% from-transparent via-95% via-border to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="font-medium text-background text-sm">Open Source</span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-5% from-transparent via-95% via-border to-transparent" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {DATA.openSource.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-x-3"
            >
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 font-semibold leading-none">
                    {project.name}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <div className="font-sans text-muted-foreground text-sm">
                    {project.description}
                  </div>
                </div>
              </div>
              <div className="flex flex-none items-center gap-1 text-right text-muted-foreground text-xs tabular-nums">
                <span>{project.dates}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
