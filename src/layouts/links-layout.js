import React from "react"
import Logo from "../components/logo"
import Social from "../components/social"
import "../styles/styles.scss"
/* Link Page Layout */

const LinksLayout = ({ children }) => (
  <div className="links-layout">
    {/* <Logo siteTitle="klgh.js" /> */}
    {/* <Social /> */}
    <main>{children}</main>
  </div>
)

export default LinksLayout
