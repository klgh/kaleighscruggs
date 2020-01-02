const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const CategoryTemplate = path.resolve("./src/templates/Category.js")

  return graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const BlogPosts = result.data.allWordpressPost.edges
    BlogPosts.forEach(post => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
        },
      })
    })

    const Pages = result.data.allWordpressPage.edges
    Pages.forEach(page => {
      createPage({
        path: `/${page.node.slug}`,
        component: PageTemplate,
        context: {
          id: page.node.wordpress_id,
        },
      })
    })

    const Category = result.data.allWordpressCategory.edges
    Category.forEach(category => {
      createPage({
        path: `/category/${category.node.slug}`,
        component: CategoryTemplate,
        context: {
          id: category.node.wordpress_id,
        },
      })
    })
  })
}
