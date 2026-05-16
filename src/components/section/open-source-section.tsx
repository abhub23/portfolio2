import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";

export default function OpenSourceSection() {
  return (
    <section id="open-source" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Open Source</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {DATA.openSource.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-3 justify-between group"
            >
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {project.name}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {project.description}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>{project.dates}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}