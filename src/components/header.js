import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ThemeToggle from '../theme/toggle-theme'
import Social from './social'

const Header = ({ siteTitle }) => (
  <Heading
    marginBottom="1.45rem"
    orientation="horizontal"
    as="h1"
    size="4xl"
    isTruncated
  >
    Kaleigh
    <Social />
    <ThemeToggle />
  </Heading>
)
export default Header
