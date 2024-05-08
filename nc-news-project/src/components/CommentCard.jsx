import React from 'react'

const CommentCard = ({commentData}) => {
  return (
    <section className="comment-card">
     
     <p>{commentData.body}</p>
     <h5>Votes: {commentData.votes}</h5>
     <h4>{commentData.author} {commentData.created_at.substring(0,10)}</h4>
    </section>
  )
}

export default CommentCard