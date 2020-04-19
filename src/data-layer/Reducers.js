import {ADD_ANNOUNCEMENT, CHANGE_VIEW} from "./ActionTypes";
import {announcementView} from "../View";

const initialState = {
    currentView: announcementView,
    announcements: []
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return Object.assign({}, state, {
                currentView: action.payload.nextView
            })

        case ADD_ANNOUNCEMENT:
            return Object.assign({}, state, {
                announcements: state.announcements.concat(action.payload)
            })
        default: return state;
    }
}



