import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

export default function ThemeToggle() {
  return (
    <div className="toggle_theme">
      <a href="https://github.com/klgh">
        <FontAwesomeIcon title="kaleigh's github" icon={["fab", "github"]} />
      </a>{" "}
      {/*  <Link to="https://www.instagram.com/klgh.js/">
        <img as={FaInstagram} />
      </Link>
      <Link to="https://github.com/klgh">
        <img as={FaGithub} />
      </Link>
      <Link to="https://dev.to/kaleigh">
        <img as={FaDev} />
      </Link>
      <Link to="https://www.linkedin.com/in/kaleigh/">
        <img as={FaLinkedin} />
      </Link>
      <Link to="https://twitter.com/kaleighscruggs">
        <img as={FaTwitter} />
      </Link> */}
      {/* <imgButton
        img={<Toggleimg />}
        variant="ghost"
        aria-label="Toggle Theme"
        onClick={toggleMode}
        w={6}
        h={6}
      /> */}
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
