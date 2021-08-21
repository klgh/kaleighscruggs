import React from 'react'
import ThemeToggle from '../theme/toggletheme'
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
