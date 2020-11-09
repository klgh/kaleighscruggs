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
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url:
          // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
          process.env.WPGRAPHQL_URL || `https://blog.kaleighscruggs.com/graphql`,
        schema: {
          //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                  50
                : // and we don't actually need more than 5000 in production for this particular site
                  5000,
          },
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
            serialize: ({ query: { site, allWpPost } }) => {
              return allWpPost.edges.map(edge => {
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
                allWpPost {
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
