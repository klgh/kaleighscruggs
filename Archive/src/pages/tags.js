import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../templates/basiclayout'
import SEO from '../components/seo'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql } from 'gatsby'

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <SEO
      title="Tags"
      keywords={[`blog`, `web developer`, `javascript`, `react`]}
    />
    <div className="tags_list">
      <h1 className="tags_list_header">Tags</h1>
      <ul className="tags_list_body">
        {group.map((tag) => (
          <li key={tag.fieldValue} className="tags_list_item">
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              className="tags_list_link"
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
