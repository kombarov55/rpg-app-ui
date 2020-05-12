import {createStore} from "redux";
import {rootReducer} from "./Reducers";
import {
    announcementView, gameCreationView, gameEditView,
    gameView, networkCreationView,
    networkSelectionView,
    questionnaireCreationView,
    questionnaireRulesView
} from "../Views";

export const initialState = {
    sidebarVisible: false,
    growl: null,
    currentView: gameEditView,
    userAccount: {

    },
    announcements: [],
    comments: [],
    conversations: [],

    activeConversation: null,
    activeNetwork: null,
    activeSubnetwork: null,
    activeGame: null,
    msgs: [],
    networks: [],
    subnetworks: [],
    games: [],

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
        description: "",
        currencyInput: "",
        skillTypeInput: "",
        currencies: [],
        skillTypes: ["Общие", "Боевые", "Магические", "Прочие"]
    },
}

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store