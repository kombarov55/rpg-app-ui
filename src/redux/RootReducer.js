import {ADD_ARTICLE} from "./ActionTypes"

const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {
    if (action.type == ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }

    return state;
}

export default rootReducer;