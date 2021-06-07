import React from 'react'
import { Flex, Text, Box, Link } from "@chakra-ui/react"

const Navbar = () =>{
    return (
        <Box pos = 'fixed' left = '0' right = '0' top = {[null, null, '0']} bottom =  {['0', null, null]} zIndex = '99' maxH='100px' maxW = '100%'>
        
            <Flex bgColor = 'white' justify = 'space-between' align = 'center' py = {4} px = {8} boxShadow="xl" minH = '56px'> 
                <Text fontWeight = '600' fontSize = '115%' color = '#504f4f'>
                    Articles<span style ={{color : '#0058bd'}} > App</span>
                </Text>
                <Box>
                    <Link href= 'https://github.com/VikaramjitSinghGorraya/react-news-app' isExternal>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#e2e2e2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </Link>
                </Box>
            </Flex>

        </Box>
    )
}

export default Navbar
