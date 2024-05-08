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

export default getArticles; getArticle
