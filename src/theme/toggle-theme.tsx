import React from 'react'
import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icon'
import {
  FaGithub,
  FaDev,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaSun,
  FaMoon,
} from 'react-icons/fa'

export default function ThemeToggle() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(FaSun, FaMoon)

  return (
    <Flex className="toggle_theme" as="div" mr="4" p="0.45rem 0.0675rem">
      <Link to="https://www.instagram.com/klgh.js/" isExternal>
        <Icon as={FaInstagram} w={6} h={6} />
      </Link>
      <Link to="https://github.com/klgh" isExternal>
        <Icon as={FaGithub} w={6} h={6} />
      </Link>
      <Link to="https://dev.to/kaleigh" isExternal>
        <Icon as={FaDev} w={6} h={6} />
      </Link>
      <Link to="https://www.linkedin.com/in/kaleigh/" isExternal>
        <Icon as={FaLinkedin} w={6} h={6} />
      </Link>
      <Link to="https://twitter.com/kaleighscruggs" isExternal>
        <Icon as={FaTwitter} w={6} h={6} />
      </Link>
      <IconButton
        icon={<ToggleIcon />}
        variant="ghost"
        aria-label="Toggle Theme"
        onClick={toggleMode}
        w={6}
        h={6}
      />
    </Flex>
  )
}
