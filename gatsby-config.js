require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Kaleigh Scruggs`,
    description: `web developer`,
    author: `@kaleighscruggs`,
    twitterUsername: "kaleighscruggs",
    siteUrl: "https://kaleigh.dev",
    image: "/images/kaleighscruggs.jpg",
    logo: "/images/ksLogo.png",
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-draft`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-remark-social-cards`,
      options: {
        title: {
          // This is the frontmatter field the title should come from
          field: "title",
          // Currently only supports DejaVuSansCondensed
          // More fonts coming soon!
          font: "DejaVuSansCondensed",
          color: "black", // black|white
          size: 48, // 16|24|32|48|64
          style: "bold", // normal|bold|italic
          x: null, // Will default to xMargin
          y: null, // Will default to yMargin
        },
        meta: {
          // The parts array is what generates the bottom text
          // Pass an array with strings and objects
          // The following array will generate:
          // "- Author Name » September 13"
          // The objects are used to pull data from your markdown's
          // frontmatter. { field: "author" } pulls the author set
          // in the frontmatter. { field: "category" } would pull
          // the category set. Any field can be used as parts
          // Note: Only pass the "format" property on date fields
          parts: [
            "- ",
            { field: "author" },
            " » ",
            { field: "date", format: "mmmm dS" },
          ],
          // Currently only supports DejaVuSansCondensed
          // More fonts coming soon!
          font: "DejaVuSansCondensed",
          color: "black", // black|white
          size: 24, // 16|24|32|48|64
          style: "normal", // normal|bold|italic
          x: null, // Will default to xMargin
          y: null, // Will default to cardHeight - yMargin - size
        },
        background: "#FFFFFF", // Background color for the card
        xMargin: 24, // Edge margin used when x value is not set
        yMargin: 24, // Edge margin used when y value is not set
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kaleigh scruggs`,
        short_name: `kaleigh.dev`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#f9ded0`,
        display: `minimal-ui`,
        image: `src/images/kaleighscruggs.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-85166082-3",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
          },
          {
            family: `Raleway`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.WORDPRESS_BASE_URL,
        protocol: process.env.WORDPRESS_PROTOCOL,
        hostingWPCOM: process.env.WORDPRESS_HOSTING_WPCOM === "true",
        useACF: process.env.WORDPRESS_USE_ACF === "true",
        acfOptionPageIds: [],
        verboseOutput: process.env.WORDPRESS_VERBOSE_OUTPUT === "true",
        perPage: 100,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://blog.kaleighscruggs.com",
          replacementUrl: "https://blog.kaleighscruggs.com",
        },
        auth: {
          wpcom_user: process.env.WORDPRESS_USER,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [],
        keepMediaSizes: false,
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://kaleigh.dev",
        sitemap: "https://kaleigh.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                })
              })
            },
            query: `
              {
                allWordpressPost {
                  edges {
                    node {
                      title
                      excerpt
                      slug
                      date(formatString: "MMMM DD, YYYY")
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Kaleigh's Blog",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/KaleighScruggs",
          },
        ],
      },
    },
    /* {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
      },
    }, */
  ],
}
