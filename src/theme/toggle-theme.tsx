import React from 'react'
import {
  Box,
  Heading,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ThemeToggle() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon)

  return (
    <Box as="div" position="fixed" right="20px" top="20px">
      <IconButton
        icon={<ToggleIcon />}
        variant="ghost"
        aria-label="Toggle Theme"
        onClick={toggleMode}
      />
    </Box>
  )
}
