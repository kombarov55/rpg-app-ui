import {createStore} from "redux";
import {rootReducer} from "./Reducers";
import {announcementView} from "../Views";

export const initialState = {
    userAccount: {

    },
    sidebarVisible: false,
    currentView: announcementView,
    announcements: [],
    comments: [],
    announcementForm: {
        anonymous: false,
        commentsEnabled: true
    },
    commentForm: {
        text: ""
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())