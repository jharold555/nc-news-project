import axios from "axios"

const apiURL = axios.create({
	baseURL: "https://project-fh4y.onrender.com/api",
});

const getArticles = () => {
    return apiURL.get("/articles")
}

export default getArticles