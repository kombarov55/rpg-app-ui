import {createStore} from "redux";
import {rootReducer} from "./Reducers";
import {announcementView} from "../View";

export const initialState = {
    sidebarVisible: false,
    currentView: announcementView,
    announcements: [],
    announcementForm: {
        anonymous: false,
        commentsEnabled: true
    },
    commentForm: {
        authorId: 1,
        text: ""
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())