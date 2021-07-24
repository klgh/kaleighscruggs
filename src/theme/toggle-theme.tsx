import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

export default function ThemeToggle() {
  return (
    <div className="toggle_theme">
      <div className="socials">
        <a href="https://www.instagram.com/klgh.js/">
          <FontAwesomeIcon
            title="kaleigh's instagram"
            icon={['fab', 'instagram']}
          />
        </a>
        <a href="https://github.com/klgh">
          <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'github']} />
        </a>
        <a href="https://dev.href/kaleigh">
          <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'dev']} />
        </a>
        <a href="https://www.linkedin.com/in/kaleigh/">
          <FontAwesomeIcon
            title="kaleigh's github"
            icon={['fab', 'linkedin']}
          />
        </a>
        <a href="https://twitter.com/kaleighscruggs">
          <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'twitter']} />
        </a>
      </div>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <FontAwesomeIcon
            icon={['fas', 'moon']}
            onClick={() =>
              theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')
            }
          />
        )}
      </ThemeToggler>
    </div>
  )
}
