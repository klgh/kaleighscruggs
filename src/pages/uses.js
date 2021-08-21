import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/basiclayout'
import SEO from '../components/seo'

const Uses = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Uses" />
      <h2>Uses</h2>
      <div className="uses">
        <h3>Editor + Terminal</h3>
        <div className="editor_terminal use_item">
          <div className="editor">
            <h4>Editor</h4>
            <p>
              <a href="https://code.visualstudio.com/" target="_blank">
                Visual Studio Code
              </a>
              <br />
              <b>Favorite VSCode Extensions:</b>
              <ul>
                <li>Auto Close Tag</li>
                <li>Auto Rename Tag</li>
                <li>Bracket Pair Colorizer</li>
                <li>Prettier</li>
              </ul>
            </p>
          </div>
          <div className="terminal">
            <h4>Terminal</h4>
            <p>
              <a href="https://iterm2.com/" target="_blank">
                iTerm2
              </a>
              <br />
              <b>theme:</b> awesomepanda
            </p>
            <a
              href="https://gist.github.com/klgh/703cf7b383065d9f92b2bda19d948eb8#file-zshrc_personal"
              target="_blank"
            >
              view my setup here
            </a>
          </div>
        </div>

        <div className="desk_office use_item">
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
                Cable Clips
              </a>{' '}
              (I use these all over the house!)
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
        </div>
        <div className="devices use_item">
          <h3>Devices</h3>
          <p>
            <b>Personal Laptop: </b>
            <br />
            <a href="https://www.apple.com/macbook-pro-13/" target="_blank">
              MacBook Pro
            </a>
            , mid-2020, 13inch (32 GB RAM, 2.3 GHz Quad-Core Intel Core i7, 1TB)
          </p>
          <p>
            <b>Phone:</b>
            <br /> Google Pixel 3
          </p>
          <p>
            <b>Headphones:</b> <br />
            <a href="ttps://amzn.to/2tv1HhS" target="_blank">
              Sony WH-CH700N Wireless Bluetooth Noise Canceling Headphones
            </a>
          </p>
        </div>
        <div className="other_favorites use_item">
          <h3>Other Favorites</h3>
          <p>
            <a href="https://amzn.to/3qlAYgb" target="_blank">
              Anker Power Bank (similar)
            </a>
          </p>
          <p>
            <a href="https://amzn.to/2L1oOsJ" target="_blank">
              MacBook Pro USB C Adapter
            </a>
          </p>
          <p>
            <a href="https://amzn.to/3qg6Suq" target="_blank">
              Electric Hot Water Kettle
            </a>
          </p>
          <p>
            <a href="https://amzn.to/3ohRYSJ" target="_blank">
              Reusable K Cups
            </a>
          </p>
        </div>
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
