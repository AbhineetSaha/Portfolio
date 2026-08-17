import type { MetadataRoute } from "next";
import { projects, site, profound, workPosts } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
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
