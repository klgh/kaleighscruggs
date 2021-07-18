import { Link } from 'gatsby'
import React from 'react'
import { Heading, Box, Center, Flex } from '@chakra-ui/react'
import ThemeToggle from '../theme/toggle-theme'

const Header = ({}) => (
  <>
    <Center className="header">
      <Flex flexDirection="column">
        <Heading className="header__title" as="h1" size="3xl">
          <Link to={`/`}>Kaleigh Scruggs</Link>
        </Heading>
      </Flex>
      <ThemeToggle />
    </Center>
  </>
)
export default Header
