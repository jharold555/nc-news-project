import React, { useEffect } from 'react'
import {getArticle} from '../api'
import { useParams } from 'react-router'
import { useState } from 'react'
import CommentSection from './CommentSection'
import ArticleVoteButton from './ArticleVoteButton'
import { MdComment } from "react-icons/md";

const ArticlePage = () => {
    const [article, setArticle] = useState({})
    const [date, setDate] = useState("")
    const [articleVotes, setArticleVotes] = useState("")
    const {article_id} = useParams()
    useEffect(() =>{
        getArticle(article_id).then((response) => {
         setArticle(response.data.article)
         setDate(response.data.article.created_at)
         setArticleVotes(response.data.article.votes)
         
        })
    }, [article_id])
    
      return (
        <>
    <section className='article-page'>
        <h1>{article.title}</h1>
        
        <h2>By {article.author}</h2>
        <label style={{fontSize:'1rem', fontStyle: 'italic',}}>Vote or leave a comment below!</label>
        <span style={{display:'inline-block', flexDirection:'column', padding:'3%', backgroundColor:'white',marginBottom:'5px', marginTop:'5px', borderRadius:'5%'}} >
         
        <ArticleVoteButton articleID={article_id} articleVotes={articleVotes} setArticleVotes={setArticleVotes}/>
        
        <MdComment style={{fontSize:'30px', marginLeft:'30px'}}/>
        <a href='#comments' style={{display:'inline-block', fontSize:'1.6rem', }}>{article.comment_count}...</a>
        
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