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
    activeNetwork: null,
    activeSubnetwork: null,
    msgs: [],
    networks: [],
    subnetworks: [],

    announcementForm: {
        anonymous: false,
        commentsEnabled: true
    },

    commentForm: {
        text: ""
    },
    messageForm: {
        text: ""
    },

    networkForm: {
        title: "",
        description: ""
    },
    subnetworkForm: {
        title: "",
        description: ""
    },
    gameForm: {
        title: "",
        description: ""
    }
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store