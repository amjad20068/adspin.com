import { MetadataRoute } from "next";
import { AGENCY_CONFIG } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${AGENCY_CONFIG.officialWebsite}/sitemap.xml`,
  };
}

