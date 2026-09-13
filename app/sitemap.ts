import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.url;
  const lastModified = new Date();

  const routes = ["", "/work", "/services", "/packages", "/about", "/faq", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/work" ? 0.9 : 0.8,
  }));
}
