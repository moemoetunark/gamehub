import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/icon.png'

export const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>NavBar</Text>
    </HStack>
  )
}
