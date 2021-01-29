import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Social = () => (
  <div className="social">
    <a href="https://www.linkedin.com/in/kaleigh/">
      <FontAwesomeIcon title="kaleigh's linkedin" icon={["fab", "linkedin"]} />
    </a>{" "}
    <a href="https://github.com/klgh">
      <FontAwesomeIcon title="kaleigh's github" icon={["fab", "github"]} />
    </a>{" "}
    <a href="https://dev.to/kaleigh">
      <FontAwesomeIcon title="kaleigh's DEV Profile" icon={["fab", "dev"]} />
    </a>{" "}
    <a href="https://twitter.com/kaleighscruggs">
      <FontAwesomeIcon title="kaleigh's twitter" icon={["fab", "twitter"]} />
    </a>{" "}
    <a href="https://www.instagram.com/klgh.js/">
      <FontAwesomeIcon
        title="kaleigh's instagram"
        icon={["fab", "instagram"]}
      />
    </a>
    <a href="https://www.twitch.tv/kaleigh_s">
      <FontAwesomeIcon title="kaleigh's twitch" icon={["fab", "twitch"]} />
    </a>
  </div>
)

export default Social
