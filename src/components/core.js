import axios from 'axios'
const API_KEY = process.env.REACT_APP_KEY

export const getArticles = (page) =>(
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=canada&page=${page}&api-key=${API_KEY}`)
            .then(res => {return(res.data.response)})
            .catch(err => console.log(err))
)

export const shortenArticleLength = (article) =>{
 return article.length === 30 ? article : article.substring(0,40) + '...'    
}

export const checkImage = (article) =>{
    return  article.multimedia[0] ? 'https://static01.nyt.com/'+article.multimedia[0].url : 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
}


