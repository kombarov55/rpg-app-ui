import {
    ADD_ANNOUNCEMENT,
    CHANGE_VIEW, CLEAR_ANNOUNCEMENT_FORM,
    DELETE_ANNOUNCEMENT,
    EDIT_ANNOUNCEMENT_FORM, INC_ANNOUNCEMENT_FIELD,
    TOGGLE_SIDEBAR, UPDATE_ANNOUNCEMENT, UPDATE_COMMENT_FORM
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

        case UPDATE_ANNOUNCEMENT:
            const {announcementIdToUpdate, fieldNameToValue} = action.payload
            const prevAnnouncement = state.announcements.find(it => it.id === announcementIdToUpdate)
            const updatedAnnouncement = Object.assign({}, prevAnnouncement, fieldNameToValue)
            const updatedAnnouncements = state.announcements.splice(
                state.announcements.findIndex(it => it.id === announcementIdToUpdate),
                1,
                updatedAnnouncement
            );

            return Object.assign({}, state, {
                announcements: updatedAnnouncements
            })

        case INC_ANNOUNCEMENT_FIELD:
            const announcementIdToInc = action.payload.announcementId
            const fieldName = action.payload.fieldName

            const prevAnnouncementToInc = state.announcements.find(it => {
                return it.id === announcementIdToInc
            })

            const incrementedValue = prevAnnouncementToInc[fieldName] += 1

            const updatedAnnouncementToInc = Object.assign({}, prevAnnouncementToInc, {fieldName, incrementedValue})

            const updatedAnnouncementsToInc = state.announcements.slice()
            const indexOfUpdated = state.announcements.findIndex(it => it.id === announcementIdToInc);
            updatedAnnouncementsToInc[indexOfUpdated] = updatedAnnouncementToInc

            return Object.assign({}, state, {
                announcements: updatedAnnouncementsToInc
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
                announcementForm: {
                    anonymous: false,
                    commentsEnabled: true
                }
            })

        case DELETE_ANNOUNCEMENT:
            const id = action.payload.id

            return Object.assign({}, state, {
                announcements: state.announcements.filter(it => it.id !== id)
            })

        case UPDATE_COMMENT_FORM:
            const updatedCommentFields = action.payload;

            const prevComment = state.commentForm
            const updatedComment = Object.assign({}, prevComment, updatedCommentFields)
            return Object.assign({}, state, {
                commentForm: updatedComment
            })

        default: return state;
    }
}



