import React from 'react'
import getArticles from '../api'
import {useState ,useEffect} from 'react'
import ArticleCard from './ArticleCard'
import NavBar from './NavBar'
import PageIteration from './PageIteration'

const Homepage = () => {
    const [articleList, setArticleList] = useState([])
    const [queryLimit, setQueryLimit] = useState(10);
    const [page, setPage] = useState(1);
   
    useEffect(() => {
      setPage(1);
    }, [queryLimit]);
    useEffect(() => {
        getArticles(queryLimit, page).then((response) => {
            setArticleList(response.data.articles)

    
        })
    }, [queryLimit, page])
  return (
    <>
    <NavBar/>
    <h1 style={{fontFamily:'Arial, Helvetica, sans-serif', textAlign:'center'}}>Welcome to NC news!</h1>
    
    <PageIteration count={50} queryLimit={queryLimit} setPage={setPage} setQueryLimit={setQueryLimit}/>

    

    {articleList.map((article) => {
        return <ArticleCard key={article.article_id} articleData={article}/>
    })}
    </>
   
  )
}

export default Homepage