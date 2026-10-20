import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${DATA.url}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const latestPostDate = allPosts.reduce<Date | undefined>((latest, post) => {
    const date = new Date(post.updatedAt ?? post.publishedAt);
    return !latest || date > latest ? date : latest;
  }, undefined);

  return [
    {
      url: DATA.url,
      lastModified: latestPostDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts,
  ];
}
