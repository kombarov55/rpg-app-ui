import {ADD_ANNOUNCEMENT, CHANGE_VIEW, TOGGLE_SIDEBAR} from "./ActionTypes";
import {initialState} from "./Store";

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return Object.assign({}, state, {
                currentView: action.payload.nextView
            })

        case TOGGLE_SIDEBAR:
            return Object.assign({}, state, {
                sidebarVisible: !state.sidebarVisible
            })

        case ADD_ANNOUNCEMENT:
            return Object.assign({}, state, {
                announcements: state.announcements.concat(action.payload)
            })
        default: return state;
    }
}



