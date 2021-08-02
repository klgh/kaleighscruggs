import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function ThemeToggle() {
  return (
    <div className="theme_toggler">
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
