import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import ArticleCard from './ArticleCard'
import getArticles from '../api'
import NavBar from './NavBar'
import PageIteration from './PageIteration'
import SortDropdown from './SortByDropdown'

const TopicPage = () => {
    const {topic} = useParams()
    const topicStr = topic.toLowerCase()
    
    const [articleList, setArticleList] = useState([])
    const [queryLimit, setQueryLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState('created_at')
    const [orderBy, setOrderBy] = useState('desc')
    
    useEffect(() => {
        setPage(1);
      }, [queryLimit]);
    useEffect(() => {
        
        getArticles(queryLimit, page, sortBy, orderBy, topicStr).then((response) => {
            setArticleList(response.data.articles)
            
        })
    }, [queryLimit, page, sortBy, orderBy, topicStr])
  return (
    <>
    <NavBar/>
    <h1 style={{fontFamily: 'Arial, Helvetica, sans-serif', textAlign:'center'}}>{topic}</h1>
    <PageIteration count={20} queryLimit={queryLimit} setPage={setPage} setQueryLimit={setQueryLimit}/>
    <SortDropdown setSortBy={setSortBy} setOrderBy={setOrderBy}/>
    {articleList.map((article) => {
        return <ArticleCard key={article.article_id} articleData={article}/>
    })}
    </>
    
  )
}

export default TopicPage