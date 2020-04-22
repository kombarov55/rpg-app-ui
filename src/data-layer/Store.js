import {createStore} from "redux";
import {rootReducer} from "./Reducers";
import {announcementView} from "../View";

export const initialState = {
    currentView: announcementView,
    announcements: [],
    sidebarVisible: false
}

export const store = createStore(rootReducer)