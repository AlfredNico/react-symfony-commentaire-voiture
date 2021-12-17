import { articleConstant } from "../constants";


export const listArticleReducer = (state = [], {type, payload}) => {
    switch (type) {
        case articleConstant.LIST_ARTICLE_REQUEST:
            return {
                isloading: true,
                articles: []
            }

        case articleConstant.LIST_ARTICLE_SUCCESS:
            return {
                isloading: false,
                articles: payload
            }

        case articleConstant.LIST_ARTICLE_FAILURE:
            return {
                isloading: false,
                error: payload
            }
    
        default:
            return state;
    }
}