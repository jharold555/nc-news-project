import React, { useEffect } from 'react'
import {getArticle} from '../api'
import { useParams } from 'react-router'
import { useState } from 'react'

const ArticlePage = () => {
    const [article, setArticle] = useState({})
    const [date, setDate] = useState("")
    const {article_id} = useParams()
    useEffect(() =>{
        getArticle(article_id).then((response) => {
         setArticle(response.data.article)
         setDate(response.data.article.created_at)
        })
    }, [article_id])
    
      return (
    <section className='article-page'>
        <h1>{article.title}</h1>
        <img src={article.article_img_url}/>
        <h3>Created {date.substring(0,10)}</h3>
        <h2>By {article.author}</h2>
        
        <p>{article.body}</p>
    </section>
  )
}

export default ArticlePage