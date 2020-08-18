const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const CategoryTemplate = path.resolve("./src/templates/Category.js")

  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
          uri
        }
      }
      allWpPage {
        nodes {
          title
          content
          slug
          uri
        }
      }
      allWpCategory {
        nodes {
          name
          slug
          uri
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const BlogPosts = result.data.allWpPost.nodes
    BlogPosts.forEach(post => {
      createPage({
        path: `/blog/${post.slug}`,
        component: BlogPostTemplate,
        context: {
          slug: post.slug,
        },
      })
    })

    const Pages = result.data.allWpPage.nodes
    Pages.forEach(page => {
      createPage({
        path: `/${page.slug}`,
        component: PageTemplate,
        context: {
          slug: page.slug,
        },
      })
    })

    const Category = result.data.allWpCategory.nodes
    Category.forEach(category => {
      createPage({
        path: `/category/${category.slug}`,
        component: CategoryTemplate,
        context: {
          slug: category.slug,
        },
      })
    })
  })
}
