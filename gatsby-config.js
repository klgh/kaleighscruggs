module.exports = {
  siteMetadata: {
    title: `Kaleigh Scruggs`,
    description: `portfolio site`,
    author: `@kaleighscruggs`,
    siteUrl: "https://kaleighscruggs.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-draft",
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
        short_name: `ks`,
        start_url: `/`,
        background_color: `#679499`,
        theme_color: `#679499`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        image: `src/images/photo.jpg`,
      },
    },
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
            family: `PT Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
              sizeByPixelDensity: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
  ],
}
