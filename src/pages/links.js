import React from "react"
import LinksLayout from "../layouts/links-layout"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Logo from "../components/logo"

library.add(fab)

const Links = () => (
  <LinksLayout>
    <SEO title="Links" />
    <div className="links">
      <Logo siteTitle="klgh.js" />
      <p>
        <a href="https://www.etsy.com/shop/RollandCode">Roll &amp; Code</a>
      </p>
      <p>
        <a href="https://www.hounddogwood.com/">HoundDogWood</a>
      </p>
      <p>
        <a href="https://www.patreon.com/yogawithnatalie">Yoga with Natalie</a>
      </p>
    </div>
  </LinksLayout>
)

export default Links
