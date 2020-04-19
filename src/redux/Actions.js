import {ADD_ARTICLE} from "./ActionTypes"

let id = 0;

export function addArticle(title = "") {
    return {
        type: ADD_ARTICLE,
        payload: { id: id++, title: title }
    }
}
