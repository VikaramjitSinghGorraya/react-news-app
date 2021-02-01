import React from 'react'
import { Text, Box, Flex } from "@chakra-ui/react"

const Footer = () =>{
    return (
        <Box>
            <Flex bgColor = 'white' justify = 'center' mt = {10}>
                <Text fontWeight = '600' fontSize = '115%' color = '#504f4f'>
                    Developed By <span style ={{color : '#0058bd'}} >Vicky Goraya</span>
                </Text>
            </Flex>
        </Box>
    )
}

export default Footer
