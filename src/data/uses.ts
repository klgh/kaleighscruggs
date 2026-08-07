/**
 * /uses page content — gear and software I rely on.
 * Inspired by https://github.com/wesbos/awesome-uses
 */
export interface UsesItem {
  name: string;
  description: string;
  url?: string;
}

export interface UsesCategory {
  title: string;
  items: UsesItem[];
}

export const usesPage = {
  intro:
    "What I use to work",
  categories: [
    {
      title: "🖥️ Hardware",
      items: [
        {
          name: "MacBook Pro",
          description: "Primary machine for work. M1 Pro 16GB RAM.",
        },
        {
          name: "Magic trackpad",
          description: "Can't go back to a mouse after using a trackpad. 🐁",
        },
      ],
    },
    {
      title: "💻 Software",
      items: [
        {
          name: "TypeScript",
          description: "Default language for app and library work.",
          url: "https://www.typescriptlang.org",
        },
        {
          name: "Angular",
          description: "Primary stack at work for large product surfaces.",
          url: "https://angular.dev",
        },
        {
          name: "React",
          description: "Still in the toolkit for consulting and side projects.",
          url: "https://react.dev",
        },
        {
          name: "Oh My Zsh",
          description: "Shell config and helpers on top of zsh.",
          url: "https://ohmyz.sh",
        },
      ],
    },
    {
      title: "📱 Apps",
      items: [
        {
          name: "Cursor",
          description: "Daily driver for coding with AI-assisted editing.",
          url: "https://cursor.com",
        },
        {
          name: "Notion",
          description: "Notes, travel guides, and personal knowledge base.",
          url: "https://www.notion.so",
        },
      ],
    },
    {
      title: "🎒 EDC",
      items: [
        {
          name: "Pixel Buds Pro 2",
          description: "Just got these, but they're already my favorite.",
        },
        {
          name: "Pixel 10 Pro XL",
          description: "My 5th pixel phone, and my favorite.",
        },
        {
          name: "Google Pixel Watch 3",
          description: "My favorite smartwatch",
        },
      ],
    },
    {
      title: "✨ Odds & ends",
      items: [
        {
          name: "Storygraph",
          description: "A more fun reading tracker",
          url: "https://www.storygraph.com",
        },
      ],
    },
  ] satisfies UsesCategory[],
} as const;
