import React from 'react'
import getArticles from '../api'
import {useState ,useEffect} from 'react'
import ArticleCard from './ArticleCard'
import NavBar from './NavBar'
import PageIteration from './PageIteration'
import SortDropdown from './SortByDropdown'

const Homepage = () => {
    const [articleList, setArticleList] = useState([])
    const [queryLimit, setQueryLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState('created_at')
    const [orderBy, setOrderBy] = useState('desc')
   
    useEffect(() => {
      setPage(1);
    }, [queryLimit]);
    useEffect(() => {
        getArticles(queryLimit, page, sortBy, orderBy).then((response) => {
            setArticleList(response.data.articles)

    
        })
    }, [queryLimit, page, sortBy, orderBy])
  return (
    <>
    <NavBar/>
    <h1 style={{fontFamily:'Arial, Helvetica, sans-serif', textAlign:'center'}}>Welcome to NC news!</h1>
    
    <PageIteration count={50} queryLimit={queryLimit} setPage={setPage} setQueryLimit={setQueryLimit}/>
     <SortDropdown setSortBy={setSortBy} setOrderBy={setOrderBy} orderBy={orderBy}/>
    

    {articleList.map((article) => {
        return <ArticleCard key={article.article_id} articleData={article}/>
    })}
    </>
   
  )
}

export default Homepage