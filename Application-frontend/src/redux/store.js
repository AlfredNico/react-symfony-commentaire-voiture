import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './reducers'
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

// const loggerMiddleware = createLogger()
const middleware = [thunkMiddleware]

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
        // applyMiddleware(
        //     thunkMiddleware,
        //     loggerMiddleware
        // )
    )
)