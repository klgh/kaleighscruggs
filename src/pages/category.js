import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import SEO from "../components/seo"
/* page for categories */

const Categories = ({ data }) => (
  <Layout>
    <SEO
      title="Blog Categories"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <div className="categories">
      <h1 className="categoryHeader">Categories</h1>
      <ul>
        {data.allWpCategory.nodes.map((category) => (
          <li>
            <Link to={`/category/${category.slug}`}>
              <div className="categoryName">
                <p>{category.name}</p>
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
    allWpCategory {
      nodes {
        name
        slug
      }
    }
  }
`
