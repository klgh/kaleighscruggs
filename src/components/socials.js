import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function Socials() {
  return (
    <div className="socials">
      <a
        href="https://www.instagram.com/klgh.js/"
        target="_blank"
        className="icon"
      >
        <FontAwesomeIcon
          title="kaleigh's instagram"
          icon={['fab', 'instagram']}
        />
      </a>
      <a href="https://github.com/klgh" target="_blank" className="icon">
        <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'github']} />
      </a>
      <a href="https://dev.to/kaleigh" target="_blank" className="icon">
        <FontAwesomeIcon title="kaleigh's dev.to" icon={['fab', 'dev']} />
      </a>
      <a
        href="https://www.linkedin.com/in/kaleigh/"
        target="_blank"
        className="icon"
      >
        <FontAwesomeIcon
          title="kaleigh's linkedin"
          icon={['fab', 'linkedin']}
        />
      </a>
      <a href="https://twitter.com/klghjs" target="_blank" className="icon">
        <FontAwesomeIcon title="kaleigh's twitter" icon={['fab', 'twitter']} />
      </a>
    </div>
  )
}
