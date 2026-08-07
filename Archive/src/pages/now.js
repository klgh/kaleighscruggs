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
        <h3>November 2022</h3>
        <h4>Reading</h4>
        <p>
          I'm currently reading{' '}
          <a
            href="https://www.goodreads.com/book/show/60393672-it-starts-with-us"
            target="_blank"
          >
            It Starts with Us
          </a>{' '}
          on Kindle, and I'm also listening to{' '}
          <a
            href="https://www.goodreads.com/book/show/60763786-i-m-glad-my-mom-died"
            target="_blank"
          >
            I'm Glad My Mom Died
          </a>{' '}
          on Libby.
        </p>
        {/* <h4>Watching</h4>
        <p>
          Season 4 of{' '}
          <a
            href="https://www.peacocktv.com/watch/home/asset/tv/the-office-superfan-episodes/8229469043710582112"
            target="_blank"
          >
            The Office Superfan episodes
          </a>{' '}
          on Peacock!
        </p>
        <p>
          <a href="https://www.imdb.com/title/tt13819960/" target="_blank">
            And Just Like That...
          </a>{' '}
          and{' '}
          <a href="https://www.imdb.com/title/tt14164730/" target="_blank">
            Dexter: New Blood
          </a>{' '}
          (what year is it again? 😀)
        </p> */}
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
