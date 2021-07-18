import React from 'react'
import { Box, Heading, Link } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icon'
import {
  FaGithub,
  FaDev,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

const Social = () => (
  <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
    <Heading margin="0">
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
    </Heading>
  </Box>
)

export default Social
