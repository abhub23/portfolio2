import { allPosts } from "content-collections";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { normalizePage, paginate } from "@/lib/pagination";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const posts = allPosts;
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-2 font-semibold text-2xl tracking-tight">
          Blog{" "}
          <span className="ml-1 rounded-md border border-border bg-card px-2 py-1 text-muted-foreground text-sm">
            {sortedPosts.length} posts
          </span>
        </h1>
        <p className="mb-8 text-muted-foreground text-sm">
          My thoughts on software development, life, and more.
        </p>
      </BlurFade>

      {paginatedPosts.length > 0 ? (
        <>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col gap-5">
              {paginatedPosts.map((post, id) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                const indexNumber = (pagination.page - 1) * PAGE_SIZE + id + 1;
                return (
                  <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                    <Link
                      className="group flex cursor-pointer items-start gap-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      href={`/blog/${slug}`}
                    >
                      <span className="mt-[5px] font-medium font-mono text-xs tabular-nums">
                        {String(indexNumber).padStart(2, "0")}.
                      </span>
                      <div className="flex flex-1 flex-col gap-y-2">
                        <p className="font-medium text-lg tracking-tight">
                          <span className="transition-colors group-hover:text-foreground">
                            {post.title}
                            <ChevronRight
                              className="ml-1 inline-block size-4 -translate-x-2 stroke-3 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                              aria-hidden
                            />
                          </span>
                        </p>
                        <p className="text-muted-foreground text-xs">{post.publishedAt}</p>
                      </div>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          </BlurFade>

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="mt-8 flex flex-row items-center justify-between gap-3">
                <div className="text-muted-foreground text-sm">
                  Page {pagination.page} of {pagination.totalPages}
                </div>
                <div className="flex gap-2 sm:justify-end">
                  {pagination.hasPreviousPage ? (
                    <Link
                      href={`/blog?page=${pagination.page - 1}`}
                      className="flex h-8 w-fit items-center justify-center rounded-lg border border-border px-2 text-sm transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Previous
                    </Link>
                  ) : (
                    <span className="flex h-8 w-fit cursor-not-allowed items-center justify-center rounded-lg border border-border px-2 text-sm opacity-50">
                      Previous
                    </span>
                  )}
                  {pagination.hasNextPage ? (
                    <Link
                      href={`/blog?page=${pagination.page + 1}`}
                      className="flex h-8 w-fit items-center justify-center rounded-lg border border-border px-2 text-sm transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      Next
                    </Link>
                  ) : (
                    <span className="flex h-8 w-fit cursor-not-allowed items-center justify-center rounded-lg border border-border px-2 text-sm opacity-50">
                      Next
                    </span>
                  )}
                </div>
              </div>
            </BlurFade>
          )}
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border px-4 py-12">
            <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
