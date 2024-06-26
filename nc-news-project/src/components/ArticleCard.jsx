import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({articleData}) => {
  return (
    <Link to={`/articles/${articleData.article_id}`}>
    <div className='article-card-container'>
    <section className='article-card'>
    <img src={articleData.article_img_url}/>
     <h2>{articleData.title}</h2>
     
     <p>By {articleData.author}</p>
     <p>{articleData.comment_count} comments || {articleData.votes} Votes</p>
    </section>
    </div>
    </Link>
  )
}

export default ArticleCard