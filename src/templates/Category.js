import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressCategory.name} />
    <div className="categoryPage">
      <h1 className="categoryHeader">{data.wordpressCategory.name}</h1>
      <ul>
        {data.allWordpressPost.edges.map(post => (
          <li>
            <Link to={`/blog/${post.node.slug}`}>
              <div className="postPreview">
                <h2
                  className="postTitle"
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
                <p className="postDate">{post.node.date}</p>
                <div
                  className="postDescription"
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressCategory(wordpress_id: { eq: $id }) {
      name
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { wordpress_id: { eq: $id } } } }
    ) {
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
`
