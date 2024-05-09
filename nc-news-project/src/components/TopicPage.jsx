import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard'
import getArticles from '../api'
import NavBar from './NavBar'
import PageIteration from './PageIteration'

const TopicPage = () => {
    const {topic} = useParams()
    const topicStr = topic.toLowerCase()
    
    const [articleList, setArticleList] = useState([])
    const [queryLimit, setQueryLimit] = useState(10);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        setPage(1);
      }, [queryLimit]);
    useEffect(() => {
        
        getArticles(queryLimit, page, topicStr).then((response) => {
            console.log(response)
            setArticleList(response.data.articles)
            
        })
    }, [queryLimit, page, topicStr])
  return (
    <>
    <NavBar/>
    <h1 style={{fontFamily: 'Arial, Helvetica, sans-serif', textAlign:'center'}}>{topic}</h1>
    <PageIteration count={20} queryLimit={queryLimit} setPage={setPage} setQueryLimit={setQueryLimit}/>
    {articleList.map((article) => {
        return <ArticleCard articleData={article}/>
    })}
    </>
    
  )
}

export default TopicPage