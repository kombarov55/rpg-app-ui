import {addAnnouncement} from "./ActionCreators";
import {ADD_ANNOUNCEMENT} from "./ActionTypes";

const initialState = {
    announcements: []
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ANNOUNCEMENT:
            return Object.assign({}, state, {
                announcements: state.announcements.concat(action.payload)
            })
        default: return state;
    }
}



