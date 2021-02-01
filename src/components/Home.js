import React, {useEffect, useState, useCallback, useRef} from 'react'
import { Grid, GridItem, Center, Heading, Box} from "@chakra-ui/react"
import {getArticles} from './core'
import Card from './Card'
import Loader from './Loader'
import Error from './Error'

const Home = () =>{

    const [news, setNews] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [hits, setHits] = useState(0)
    useEffect(() =>{
        setLoading(true)
        initArticles()
    },[page])

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setPage(page + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading])

    const initArticles = () =>{
        getArticles(page)
        .then(res => {
            setLoading(false)
            setError(false)
            news.length === 0 ? setNews(res.docs) : setNews([...news, ...res.docs]) 
            setHits(res.meta.hits)
        })
        .catch(err => {setError(true)})
    }

    const showEndOfArticles = () =>{
        return(
            <>
            {news.length > hits && error &&
                <Center>
                    <Heading color = '#504f4f' as='h1'>No More Artciles To Display</Heading>
                </Center>
            }
            </>
        )
    }

    const showError = () =>{
        return(
            <>
                {error && <Error/>}
            </>
        )
    }
    const showArticles = () =>{
        return(
            <Box overflow = 'hidden' pt={[4, null, 50]} px = {[0,null, 50]} mt= {[0, 0, 10]}>
                <Grid templateColumns="repeat(auto-fit, minmax(320px, 1fr))" gap = {4}>
                    {
                        news.map((article,index)=>{
                            if (news.length === index + 1) {
                                return (
                                    <GridItem ref={lastBookElementRef} key = {index}>
                                <Card key = {index} article = {article}/>
                            </GridItem>
                                )
                              } else {
                                return (
                                    <GridItem key = {index}>
                                <Card key = {index} article = {article}/>
                            </GridItem>
                                )
                              }
                        })
                    }
                </Grid>
            </Box>
        )
    }

    const showLoader = () =>{
        return(<>
            {loading && <Loader/>}
        </>)
    }
    
    return (
        <>
            {showArticles()}
            {showLoader()}
            {showEndOfArticles()}
            {showError()}
        </>
    )
}

export default Home
