import type { MetadataRoute } from "next";
import { projects, site, profound, workPosts } from "./content";
import { getAllWriteups } from "./writeups";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const writeups = await getAllWriteups();

  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...writeups.map((post) => ({
      url: `${site.url}/projects/${post.project}/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${site.url}/work/${profound.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...workPosts.map((post) => ({
      url: `${site.url}/work/${profound.slug}/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
