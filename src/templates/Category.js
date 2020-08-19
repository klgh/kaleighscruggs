import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wpCategory.name} />
    <div className="categoryPage">
      <h1 className="categoryHeader">{data.wpCategory.name}</h1>
      <ul>
        {data.allWpPost.nodes.map(post => (
          <li>
            <Link to={`/blog/${post.slug}`}>
              <div className="postPreview" key={post.slug}>
                <h2
                  className="postTitle"
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
                <p className="postDate">{post.date}</p>
                <div
                  className="postDescription"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
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
  query($slug: String!) {
    wpCategory(slug: { eq: $slug }) {
      name
      slug
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $slug } } } } }
    ) {
      nodes {
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
