import {createStore} from "redux";
import {rootReducer} from "./Reducers";
import {
    announcementView,
    gameView, networkCreationView,
    networkSelectionView,
    questionnaireCreationView,
    questionnaireRulesView
} from "../Views";

export const initialState = {
    sidebarVisible: false,
    growl: null,
    currentView: networkCreationView,
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

    networks: [],

    commentForm: {
        text: ""
    },
    messageForm: {
        text: ""
    },

    networkForm: {
        title: "",
        description: ""
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store