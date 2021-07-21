import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

export default function ThemeToggle() {
  return (
    <div className="toggle_theme">
      <Link to="https://www.instagram.com/klgh.js/">
        <FontAwesomeIcon
          title="kaleigh's instagram"
          icon={['fab', 'instagram']}
        />
      </Link>
      <Link to="https://github.com/klgh">
        <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'github']} />
      </Link>
      <Link to="https://dev.to/kaleigh">
        <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'dev']} />
      </Link>
      <Link to="https://www.linkedin.com/in/kaleigh/">
        <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'linkedin']} />
      </Link>
      <Link to="https://twitter.com/kaleighscruggs">
        <FontAwesomeIcon title="kaleigh's github" icon={['fab', 'twitter']} />
      </Link>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    </div>
  )
}
