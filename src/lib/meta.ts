export interface PageMeta {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}

const SITE_NAME = "Kaleigh Scruggs";
const SITE_URL = "https://kaleighscruggs.com";

function setMetaTag(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
): void {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function removeMetaTag(selector: string): void {
  document.head.querySelector(selector)?.remove();
}

export function setPageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: PageMeta): void {
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;

  document.title = fullTitle;

  setMetaTag('meta[name="description"]', "name", "description", description);

  setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);

  setMetaTag(
    'meta[property="og:description"]',
    "property",
    "og:description",
    description,
  );

  setMetaTag('meta[property="og:type"]', "property", "og:type", type);

  setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);

  setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);

  setMetaTag(
    'meta[name="twitter:description"]',
    "name",
    "twitter:description",
    description,
  );

  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = canonicalUrl;

  if (type === "article" && publishedTime) {
    setMetaTag(
      'meta[property="article:published_time"]',
      "property",
      "article:published_time",
      publishedTime,
    );
  } else {
    removeMetaTag('meta[property="article:published_time"]');
  }
}
