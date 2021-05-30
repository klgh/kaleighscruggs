/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

module.exports = {
  siteMetadata: {
    title: `Kaleigh Scruggs`,
    description: `web developer`,
    author: `@kaleighscruggs`,
    twitterUsername: 'kaleighscruggs',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `assets`,
    //     path: `${__dirname}/content/assets`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/templates/blogpost.js'),
          default: require.resolve('./src/templates/basic-page.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://blog.kaleighscruggs.com/graphql`,
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
        icon: `src/images/kaleighscruggs.jpg`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Raleway'],
        },
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    // `gatsby-plugin-offline`,
  ],
}
