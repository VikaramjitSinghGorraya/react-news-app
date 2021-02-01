import React from 'react'
import { Box, Heading, Text, Link, useDisclosure, Fade, Button } from "@chakra-ui/react"
import moment from 'moment'
import { shortenArticleLength, checkImage } from './core'
const Card = ({article}) =>{

    const { isOpen, onToggle } = useDisclosure()

    return (

            <Box borderRadius = 'lg' w = {['90%','100%', '100%']} mx = 'auto'>
                <Box 
                borderTopLeftRadius = 'lg'
                borderTopRightRadius = 'lg'
                position = 'relative'
                bgImage = {`url(${checkImage(article)})`} 
                bgSize = "cover"
                bgPos = 'center'
                h = '240px' 
                w = '100%'
               onMouseEnter = {onToggle}
               onMouseLeave = {onToggle}
                >
                    <Fade in={isOpen}>
                        <Box borderRadius = 'lg' minH = '240px' bgColor='rgba(0,0,0,0.6)'>
                        <Link href = {article.web_url} isExternal style = {{textDecoration:'none'}}>
                            <Button position = 'absolute' zIndex='99' m='auto' top='0' bottom='0' left='0' right = '0' outline = 'none'>VIEW</Button>
                        </Link>
                        </Box>
                    </Fade>
                </Box>

                <Box boxShadow="lg" px='2' py = '6' rounded="md" bg="white">
                    <Box>
                    <Link href = {article.web_url} isExternal style = {{textDecoration:'none'}}>
                        <Heading as = 'h6' size="sm" fontWeight='600'>
                            {shortenArticleLength(article.headline.main)}
                        </Heading>
                    </Link>
                    </Box>
                    <Box mt = {3}>
                        <Text color = 'gray.500'>
                            {moment(article.pub_date).format('MMMM DD | h:mm A')}
                        </Text>

                        <Text color = 'gray.500'>
                            {article.source}
                        </Text>
                    </Box>
                </Box>
            </Box>
    )
}

export default Card
