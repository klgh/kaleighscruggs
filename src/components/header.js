import React from 'react'
import ThemeToggle from '../theme/toggle-theme'
import Socials from './socials'
import Logo from './logo'
import Menu from './menu'

const Header = ({}) => (
  <header>
    <Logo />
    <Menu />
    <Socials />
    <ThemeToggle />
  </header>
)
export default Header
