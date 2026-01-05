import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://itsanjaal.com", lastModified: new Date() },
    { url: "https://itsanjaal.com/contact", lastModified: new Date() },
    { url: "https://www.itsanjaal.com/msexcel", lastModified: new Date() },
    { url: "https://itsanjaal.com/courses/python-programming", lastModified: new Date() },
    { url: "https://itsanjaal.com/courses/ui-ux-design", lastModified: new Date() },
  ];
}
