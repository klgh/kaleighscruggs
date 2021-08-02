import React from 'react'
import ThemeToggle from '../theme/toggle-theme'
import Socials from './socials'
import Logo from './logo'
import Nav from './nav'

const Header = ({}) => (
  <header>
    <Logo />
    <Nav />
    <Socials />
    <ThemeToggle />
  </header>
)
export default Header
