import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { ARTICLES } from "@/data/articles";
import { AGENCY_CONFIG } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = AGENCY_CONFIG.officialWebsite;

  const staticPages = [
    "",
    "/about",
    "/services",
    "/work",
    "/process",
    "/clients",
    "/contact",
    "/insights",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectPages = PROJECTS.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}

