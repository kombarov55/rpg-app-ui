import {createStore} from "redux";
import {rootReducer} from "./Reducers";
import {announcementView} from "../View";

export const initialState = {
    sidebarVisible: false,
    currentView: announcementView,
    announcements: [],
    announcementForm: {}
}

export const store = createStore(rootReducer)