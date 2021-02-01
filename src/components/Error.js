import React from 'react'
import { Center, Text } from "@chakra-ui/react"

const Error = () =>{
    return (
        <Center mt = {[5, null, null]}>
            <Text fontSize = '25px' fontWeight = '500' color = '#504f4f' as='p'>Something Went Wrong...</Text>
        </Center>
    )
}

export default Error
