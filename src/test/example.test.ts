import { describe, expect, it } from "vitest";
import { getFeaturedGardenPosts, getGardenPosts } from "@/lib/garden";
import { resumeContactLine } from "@/data/resume";

describe("garden", () => {
  it("loads markdown posts", () => {
    const posts = getGardenPosts();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]?.meta.title).toBeTruthy();
  });

  it("excludes draft posts from published lists", () => {
    const posts = getGardenPosts();
    expect(posts.every((post) => !post.meta.draft)).toBe(true);
  });

  it("returns featured posts from frontmatter", () => {
    const featured = getFeaturedGardenPosts();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((post) => post.meta.featured)).toBe(true);
    expect(featured.every((post) => !post.meta.draft)).toBe(true);
  });
});

describe("resume", () => {
  it("builds a contact line with email and phone", () => {
    const line = resumeContactLine();
    expect(line).toContain("Suwanee, GA");
    expect(line).toContain("kaleighscruggs@gmail.com");
  });
});
