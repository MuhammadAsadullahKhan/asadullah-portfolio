export default function sitemap() {
  const baseUrl = "https://example.com"; // replace with real domain when deployed

  const routes = ["", "/projects", "/experience", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}

