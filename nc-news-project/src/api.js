import axios from "axios"

const apiURL = axios.create({
	baseURL: "https://project-fh4y.onrender.com/api",
});
export const getArticles = (queryLimit, page, topic) => {
    if(topic === undefined){
        return apiURL.get(`/articles?p=${page}&&limit=${queryLimit}`)
    }
    else{
        return apiURL.get(`/articles?topic=${topic}&p=${page}&limit=${queryLimit}`)
    }
    
   
}

export const getArticle = (article_id) => {
    return apiURL.get(`/articles/${article_id}`)
}
export const getComments = (articleID, queryLimit, page) => {
    
    return apiURL.get(`/${articleID}/comments?p=${page}&&limit=${queryLimit}`)
}
export const patchArticleVotes = (article_id, reqObj) => {
    return apiURL.patch(`/articles/${article_id}`, reqObj)
}
export const postComment = (articleID, reqObj) => {
    return apiURL.post(`/articles/${articleID}/comments`, reqObj)
}
export const deleteComment = (comment_id)  => {
  return apiURL.delete(`/comments/${comment_id}`)
}
export const getTopics = () => {
    return apiURL.get('/topics')
}
export default getArticles; getArticle; getComments; patchArticleVotes; postComment; getTopics; 
