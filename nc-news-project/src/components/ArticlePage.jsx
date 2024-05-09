import React, { useEffect } from 'react'
import {getArticle} from '../api'
import { useParams } from 'react-router'
import { useState } from 'react'
import CommentSection from './CommentSection'

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
        <>
    <section className='article-page'>
        <h1>{article.title}</h1>
        
        <h2>By {article.author}</h2>
        <span style={{padding:'2%'}} >
          <img style={{maxWidth:"3rem", alignItems:'center'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Simple_Comments.svg/1200px-Simple_Comments.svg.png?20110613140220"/>
        <a href='#comments' style={{display:'inline-block', fontSize:'1.5rem', }}>{article.comment_count} comments</a>
        </span>
        
        <img src={article.article_img_url}/>
        <h3>Created {date.substring(0,10)}</h3>
        <p>{article.body}</p>
        
    </section>
    <section id='comments'>
    <CommentSection  articleID={article_id} count={article.comment_count}/>
    </section>
    </>
  )
}

export default ArticlePage