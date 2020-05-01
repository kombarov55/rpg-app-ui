import {createStore} from "redux";
import {rootReducer} from "./Reducers";
import {announcementView, conversationView} from "../Views";

export const initialState = {
    sidebarVisible: false,
    currentView: announcementView,
    userAccount: {

    },
    announcements: [],
    comments: [],
    conversations: [],

    activeConversation: null,
    msgs: [],
    announcementForm: {
        anonymous: false,
        commentsEnabled: true
    },
    commentForm: {
        text: ""
    },
    messageForm: {
        text: ""
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())