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
export default getArticles; getArticle; getComments;
