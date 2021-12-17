import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { registrationReducer } from './registration.reducer'
import { listArticleReducer } from './article.reducer'

export const rootReducer = combineReducers({
    authReducer,
    registrationReducer,
    listArticleReducer
})
