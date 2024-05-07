import React from 'react'
import getArticles from '../api'
import {useState ,useEffect} from 'react'
import ArticleCard from './ArticleCard'

const Homepage = () => {
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        getArticles().then((response) => {
            setArticleList(response.data.articles)
        })
    }, [])
  return (
    <>
    <h1>Welcome to NC news!</h1>
    {articleList.map((article) => {
        return <ArticleCard articleData={article}/>
    })}
    </>
   
  )
}

export default Homepage