import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/layout'
import SEO from '../components/seo'
import '../styles/styles.scss'
import { StaticImage } from 'gatsby-plugin-image'
import LatestBlogPost from '../components/latestposts'

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div className="index">
        <div className="small-container">
          <h3>Hey! I'm Kaleigh</h3>
          <StaticImage
            src="../images/kaleighscruggs.jpg"
            alt="A photo of Kaleigh outside"
            layout="constrained"
            placeholder="blurred"
          />
          <p>
            I'm a developer with over ten years of experience creating and
            styling websites and applications. I received my master's degree in
            Business and Technology from UGA and my undergrad at Georgia
            Southern. I'm currently a developer at{' '}
            <a href="https://www.sportsengine.com/">SportsEngine</a>. I've
            worked on various projects using WordPress, Drupal, Angular,
            ReactJS, and GatsbyJS, Ember.JS, and more.
          </p>

          <p>
            I have a passion for diversity and inclusion and at both North
            Highland and State Farm helped establish Women In Technology
            employee groups. These groups offered networking, awareness, and
            events for employees as well as activities for younger (school-aged)
            girls to learn more about careers in STEM. I am also a founding
            member of{' '}
            <a
              href="https://www.hiretechladies.com/"
              alt="tech ladies website"
              className="currently-looking"
            >
              Tech Ladies
            </a>{' '}
            and involved with{' '}
            <a
              href="https://www.womenwhocode.com/atlanta"
              alt="women who code atlanta"
              className="currently-looking"
            >
              Women Who Code Atlanta
            </a>{' '}
            as a host for the Gwinnett meetups and the{' '}
            <a
              href="https://www.womenwhocode.com/frontend"
              alt="women who code frontend track"
              className="currently-looking"
            >
              Women Who Code Front End track
            </a>{' '}
            as an evangelist and volunteer.
          </p>
        </div>
        <div className="small-container">
          <LatestBlogPost />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
