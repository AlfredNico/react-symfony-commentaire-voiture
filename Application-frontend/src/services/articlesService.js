import { baseURL } from "../config";
import { authHeader } from "../utilis/authHeader";
import { handleResponse } from "./handleResponse";


export const articleService = {
    getAllArticle,
    getArticleById,
    postComment
};


function getAllArticle() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${baseURL}/api/articles`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

function getArticleById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${baseURL}/api/articles/${id}`, requestOptions)
        .then(handleResponse)
        .then(res => res);
}

function postComment(description, id) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ description })
    };
    return fetch(`${baseURL}/api/comments/${id}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}