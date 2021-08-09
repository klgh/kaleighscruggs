import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../templates/basiclayout'
// Components
import { Link, graphql } from 'gatsby'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} ${tag} post${totalCount === 1 ? '' : 's'} `

  return (
    <Layout>
      <div className="tag_page">
        <h1 className="tag_page_header">{tagHeader}</h1>
        <ul className="tag_page_body">
          {edges.map(({ node }) => {
            const { slug } = node.frontmatter
            const { title } = node.frontmatter
            return (
              <li key={slug} className="tag_page_item">
                <Link to={`/blog/${slug}`}>{title}</Link>
              </li>
            )
          })}
        </ul>
        <Link to="/tags" className="tag_page_footer">
          All tags
        </Link>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
