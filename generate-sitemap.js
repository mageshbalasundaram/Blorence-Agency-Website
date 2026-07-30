import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";

// Define your URLs here
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/portfolio", changefreq: "weekly", priority: 0.9 },
  { url: "/archive", changefreq: "monthly", priority: 0.8 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/career", changefreq: "monthly", priority: 0.6 },
  { url: "/dkacservice", changefreq: "monthly", priority: 0.5 },
  { url: "/dswhipping", changefreq: "monthly", priority: 0.5 },
  { url: "/kaleyncare", changefreq: "monthly", priority: 0.5 },
  { url: "/aplused", changefreq: "monthly", priority: 0.5 },
  { url: "/theessadresses", changefreq: "monthly", priority: 0.5 },
  { url: "/T&C", changefreq: "yearly", priority: 0.1 },
  { url: "/privacy&policy", changefreq: "yearly", priority: 0.1 },
  // Add more URLs here
];

// Create a SitemapStream instance
const sitemap = new SitemapStream({
  hostname: "https://www.blorencedesign.com",
});

// Write the sitemap to a file in the public directory
const writeStream = createWriteStream(resolve("public", "sitemap.xml"));

// Handle stream errors
writeStream.on("error", (err) => {
  console.error("Error writing to sitemap file", err);
});

// Stream URLs to the sitemap
urls.forEach((url) => sitemap.write(url));
sitemap.end();

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// Log success message
writeStream.on("finish", () => {
  console.log("Sitemap created successfully");
});
