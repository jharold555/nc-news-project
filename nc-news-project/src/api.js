import axios from "axios"

const apiURL = axios.create({
	baseURL: "https://project-fh4y.onrender.com/api",
});

const getArticles = () => {
    return apiURL.get("/articles")
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
    console.log(reqObj)
    return apiURL.post(`/articles/${articleID}/comments`, reqObj)
}
export default getArticles; getArticle; getComments; patchArticleVotes; postComment;
