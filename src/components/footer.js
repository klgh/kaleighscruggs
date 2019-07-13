import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Footer = () => (
  <div>
    <div
      className="footer"
      style={{
        background: "#679499",
        padding: "0.5em 30px",
      }}
    >
      <div
        className="footer-links"
        style={{
          maxWidth: "960px",
          textAlign: "right",
          margin: "0 auto",
        }}
      >
        <ul className="social">
          <li>
            <a href="https://twitter.com/kaleighscruggs">
              <FontAwesomeIcon
                title="kaleigh's twitter"
                icon={["fab", "twitter"]}
              />
            </a>
          </li>
        </ul>{" "}
        <br />© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  </div>
)

export default Footer
