import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const LatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query lasttwoPosts {
      allWpPost(limit: 2) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  return (
    <header>
      {data.allWpPost.edges.map((blog) => (
        <div key={blog.node.title}>
          <h1>{blog.node.title}</h1>
        </div>
      ))}
    </header>
  )
}

export default LatestBlogPost
