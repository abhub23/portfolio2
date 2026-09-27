"use client";

import { cn } from "cn";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="h-48 w-full bg-muted" />;
  }

  return (
    <div className="relative h-48 w-full">
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link href={href || "#"} target="_blank" rel="noopener noreferrer" className="block">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="h-48 w-full object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="h-48 w-full bg-muted" />
          )}
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-muted-foreground text-xs">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="prose dark:prose-invert max-w-full flex-1 text-pretty font-sans text-muted-foreground text-xs leading-relaxed">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="h-6 w-fit border border-border px-2 font-medium text-[11px]"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 bg-black text-white text-xs dark:bg-white dark:text-black"
                  variant="outline"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
