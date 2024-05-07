import React from 'react'

const ArticleCard = ({articleData}) => {
   
  return (
    <div className='article-card-container'>
    <section className='article-card'>
    <img src={articleData.article_img_url}/>
     <h2>{articleData.title}</h2>
     
     <p>By {articleData.author}</p>
    </section>
    </div>
  )
}

export default ArticleCard