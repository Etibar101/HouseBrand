import {combineReducers, createStore} from "redux";
import articlesReducer from "./articles-reducer"

let reducers = combineReducers({
    articlesPage: articlesReducer,
})


let store = createStore(reducers)

export default store;