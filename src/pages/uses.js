import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/basic-layout'
import SEO from '../components/seo'

const Uses = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Uses" />
      <div className="uses">
        <h2>Uses</h2>
        <h3>Editor + Terminal</h3>
        <i>Visual Studio Code</i>
        <h4>Favorite VSCode Extensions:</h4>
        <ul>
          <li>Auto Close Tag</li>
          <li>Auto Rename Tag</li>
          <li>Bracket Pair Colorizer</li>
          <li>Prettier</li>
        </ul>
        <p>iTerm2, theme: awesomepanda</p>
        <a
          href="https://gist.github.com/klgh/703cf7b383065d9f92b2bda19d948eb8#file-zshrc_personal"
          target="_blank"
        >
          view my setup here
        </a>
        <h3>Desk/Home Office Setup</h3>
        <ul>
          <li>
            <a href="https://amzn.to/2FyBilo" target="_blank">
              Trideer Exercise Ball Chair
            </a>
          </li>
          <li>
            <a href="https://amzn.to/2ScUdYZ" target="_blank">
              Velcro Ties
            </a>
          </li>
          <li>
            <a href="https://amzn.to/36W2XIe" target="_blank">
              Cable Clips (I use these all over the house!)
            </a>
          </li>
          <li>
            <a href="https://amzn.to/3mtC0V0" target="_blank">
              Laptop Stand
            </a>
          </li>
          <li>
            <a href="https://amzn.to/2Vw6n1j" target="_blank">
              Standing Desk
            </a>
          </li>
          <li>
            <a href="https://amzn.to/2KXxhwV" target="_blank">
              Bluetooth Mouse
            </a>
          </li>
        </ul>
        <h3>Devices</h3>
        <p>
          Personal Laptop: MacBook Pro, mid-2020, 13inch (32 GB RAM, 2.3 GHz
          Quad-Core Intel Core i7, 1TB)
        </p>
        <p>Phone: [Google Pixel 3]</p>
        <p>
          <a href="ttps://amzn.to/2tv1HhS" target="_blank">
            Headphones: [Sony WH-CH700N Wireless Bluetooth Noise Canceling
            Headphones]
          </a>
        </p>
        <h3>Other Favorites</h3>
        <p>
          [Anker Power Bank](https://amzn.to/3qlAYgb) (similar) [MacBook Pro USB
          C Adapter](https://amzn.to/2L1oOsJ) [Electric Hot Water
          Kettle](https://amzn.to/3qg6Suq) [Reusable K
          Cups](https://amzn.to/3ohRYSJ)
        </p>
      </div>
    </Layout>
  )
}

export default Uses

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
