import { Link } from 'gatsby'
import React from 'react'
import ThemeToggle from '../theme/toggle-theme'
import kslogo from '../images/kslogo.svg'

const Header = ({}) => (
  <>
    <Link to={`/`}>
      {/* <Image src={kslogo} alt="kaleigh scruggs" className="ks-logo" /> */}
      <header className="header__title" as="h1" size="3xl">
        Kaleigh Scruggs
      </header>
    </Link>
    <ThemeToggle />
  </>
)
export default Header
