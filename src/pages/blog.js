import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import SEO from "../components/seo"
/* page for kaleighscruggs.com/blog */

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div className="blogPage">
      <h1>Blog</h1>
      <h4>
        <Link to={`/category/`}>Categories</Link>
      </h4>
      <ul>
        {data.allWpPost.nodes.map((node) => (
          <li>
            <Link to={`/blog/${node.slug}`}>
              <div className="postPreview" key={node.slug}>
                <h2 className="postTitle">{node.title}</h2>
                <p className="postDate">{node.date}</p>
                <div
                  className="postDescription"
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
