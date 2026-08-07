import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/basiclayout'
import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const ComedyPage = ({ data, location, props }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="comedy" />
      <div className="comedy">
        <h2>Comedy</h2>
        <StaticImage
          src="../images/comedylogo.jpeg"
          alt="kaleigh scruggs comedy logo"
          className="homepageImg"
        />
        <div>
          <p>
            Kaleigh has been performing standup in Atlanta since 2016, appearing
            in various places such as Laughing Skull Lounge, The Punchline,
            Highwire Comedy, 420 Comedy Hour, Java Monkey, and more. She has
            taken the intro &amp; advanced Joel Byars Comedy Class and Online
            Writing Satire for the Internet with The Second City. In 2018 she
            began taking improv classes at Highwire Comedy.{' '}
          </p>{' '}
          <p>
            Kaleigh placed 2nd in The Punchline’s Sunday Night Comedy Festival
            -Feb 2017
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2k18RNp2AnY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="kaleighcomedy"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default ComedyPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
