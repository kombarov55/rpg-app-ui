import {
    ADD_ANNOUNCEMENT,
    CHANGE_VIEW, CLEAR_ANNOUNCEMENT_FORM,
    DELETE_ANNOUNCEMENT,
    EDIT_ANNOUNCEMENT_FORM,
    TOGGLE_SIDEBAR
} from "./ActionTypes";
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

        case EDIT_ANNOUNCEMENT_FORM:
            const updatedFields = action.payload;

            const prevForm = state.announcementForm
            const editedForm = Object.assign({}, prevForm, updatedFields)
            return Object.assign({}, state, {
                announcementForm: editedForm
            })

        case CLEAR_ANNOUNCEMENT_FORM:
            return Object.assign({}, state, {
                announcementForm: {}
            })

        case DELETE_ANNOUNCEMENT:
            const id = action.payload.id

            return Object.assign({}, state, {
                announcements: state.announcements.filter(it => it.id !== id)
            })

        default: return state;
    }
}



