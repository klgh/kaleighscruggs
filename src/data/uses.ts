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
  intro: 'What I use to work',
  categories: [
    {
      title: '🖥️ Hardware',
      items: [
        {
          name: 'MacBook Pro 16-inch M4 Max',
          description: 'Primary machine for work.',
        },
        {
          name: 'MacBook Pro 13-inch',
          description: 'Personal machine',
        },
        {
          name: 'Magic trackpad',
          description: "Can't go back to a mouse after using a trackpad. 🐁",
        },
      ],
    },
    {
      title: '💻 Favorite Extensions',
      items: [
        {
          name: 'Project Manager',
          description:
            'The easiest way to switch between projects in VSCode and Cursor, and use different workspaces and extensions for each project.',
          url: 'https://open-vsx.org/extension/alefragnani/project-manager',
        },
        {
          name: 'Wallaby.js',
          description: 'Makes testing your code so much easier.',
          url: 'https://wallabyjs.com',
        },
      ],
    },
    // {
    //   title: '📱 Apps',
    //   items: [
    //     {
    //       name: 'Cursor',
    //       description: 'Daily driver for coding with AI-assisted editing.',
    //       url: 'https://cursor.com',
    //     },
    //     {
    //       name: 'Notion',
    //       description: 'Notes, travel guides, and personal knowledge base.',
    //       url: 'https://www.notion.so',
    //     },
    //   ],
    // },
    {
      title: '🎒 EDC',
      items: [
        {
          name: 'Pixel Buds Pro 2',
          description: "Just got these, but they're already great",
          url: 'https://store.google.com/product/pixel_buds_pro_2',
        },
        {
          name: 'Pixel 10 Pro XL',
          description: 'My 5th pixel phone, and my favorite.',
          url: 'https://store.google.com/config/pixel_10_pro',
        },
        {
          name: 'Google Pixel Watch 3',
          description: 'First smartwatch after using Fitbits for 10+ years',
          url: 'https://store.google.com/product/pixel_watch_3',
        },
      ],
    },
    {
      title: '✨ Odds & ends',
      items: [
        {
          name: 'Storygraph',
          description: 'A more fun reading tracker',
          url: 'https://www.storygraph.com',
        },
      ],
    },
  ] satisfies UsesCategory[],
} as const
