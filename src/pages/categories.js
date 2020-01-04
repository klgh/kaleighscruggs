import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
/* page for categories */

const Categories = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="categoryPage">
      <ul>
        {data.allWordpressCategory.edges.map(category => (
          <li>
            <Link to={`/category/${category.node.slug}`}>
              <div className="categoryName">
                <p
                  className="catTitle"
                  dangerouslySetInnerHTML={{ __html: category.node.name }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default Categories

export const query = graphql`
  query {
    allWordpressCategory {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
