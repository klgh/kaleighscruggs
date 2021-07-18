import { Box, Heading, Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import ThemeToggle from './toggle-theme'
import { Icon } from '@chakra-ui/react'
import {
  FaGithub,
  FaDev,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
import { rhythm, scale } from '../utils/typography'

const Header = ({ siteTitle }) => (
  <Box as="header" marginBottom="1.45rem">
    <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
      <Heading margin="0">
        <div>
          <h1>
            <Link to={`/`}>Kaleigh</Link>
          </h1>
          <a href="https://www.instagram.com/klgh.js/">
            <Icon as={FaInstagram} w={8} h={8} />
          </a>
          <a href="https://github.com/klgh">
            <Icon as={FaGithub} w={8} h={8} />
          </a>
          <a href="https://dev.to/kaleigh">
            <Icon as={FaDev} w={8} h={8} />
          </a>
          <a href="https://www.linkedin.com/in/kaleigh/">
            <Icon as={FaLinkedin} w={8} h={8} />
          </a>
          <a href="https://twitter.com/kaleighscruggs">
            <Icon as={FaTwitter} w={8} h={8} />
          </a>
        </div>
      </Heading>
    </Box>
    <Box as="div" position="fixed" right="20px" top="20px">
      <ThemeToggle />
    </Box>
  </Box>
)
export default Header
