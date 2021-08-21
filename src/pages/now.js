import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/basiclayout'
import SEO from '../components/seo'

const Now = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Now" />
      <div className="now">
        <h2>Now</h2>
        <h3>August 2021</h3>
        <h4>Reading</h4>
        <p>
          I'm currently reading{' '}
          <a
            href="https://www.goodreads.com/book/show/52195146-have-you-seen-me"
            target="_blank"
          >
            Have You Seen Me?
          </a>{' '}
          on my Kindle Paperwhite, and{' '}
          <a
            href="https://www.goodreads.com/book/show/54860443-one-last-stop"
            target="_blank"
          >
            One Last Stop
          </a>{' '}
          on paperback.
        </p>
        <p>
          Follow me on{' '}
          <a
            href="https://www.goodreads.com/user/show/15653530-kaleigh"
            target="_blank"
          >
            Goodreads
          </a>{' '}
          to keep up with what I'm reading!
        </p>
        <h4>Watching</h4>
        <p>
          Making my way through{' '}
          <a
            href="https://www.peacocktv.com/watch/home/asset/tv/the-office-superfan-episodes/8229469043710582112"
            target="_blank"
          >
            The Office Superfan episodes
          </a>{' '}
          on Peacock!
        </p>
      </div>
    </Layout>
  )
}

export default Now

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
