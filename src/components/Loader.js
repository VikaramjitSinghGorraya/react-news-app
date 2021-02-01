import React from 'react'
import { Grid, GridItem, Skeleton, Box } from "@chakra-ui/react"

const Loader = () =>{
    return (
        <Box p={[4, null, 50]}>
        <Grid templateColumns="repeat(auto-fit, minmax(330px, 1fr))" gap = {4}>
            <Skeleton height = '240px' width = {['290px', '330px', '330px']}/> 
            <Skeleton height = '240px' width = {['290px', '330px', '330px']}/>
            <Skeleton height = '240px' width = {['290px', '330px', '330px']}/>
        </Grid>
        </Box>
    )
}

export default Loader
