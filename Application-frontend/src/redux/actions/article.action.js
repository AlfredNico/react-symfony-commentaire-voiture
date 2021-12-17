import { articleService } from "../../services"
import { articleConstant } from "../constants"


export const listAction = () => async(dispatch) => {
    dispatch({type: articleConstant.LIST_ARTICLE_REQUEST})
    articleService.getAllArticle()
        .then(
            response =>
                dispatch({type: articleConstant.LIST_ARTICLE_SUCCESS, payload: response})
            ,
            error => {
                console.log('error=', error);
                dispatch({type: articleConstant.LIST_ARTICLE_FAILURE, error})
            }
        )
}