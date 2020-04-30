import {
    ADD_ANNOUNCEMENT, ADD_COMMENT,
    CHANGE_VIEW, CLEAR_ANNOUNCEMENT_FORM, CLEAR_COMMENTS, DEC_ANNOUNCEMENT_FIELD,
    DELETE_ANNOUNCEMENT, DELETE_COMMENT,
    EDIT_ANNOUNCEMENT_FORM, INC_ANNOUNCEMENT_FIELD, RESTORE_ANNOUNCEMENT, RESTORE_COMMENT,
    TOGGLE_SIDEBAR, UPDATE_ANNOUNCEMENT, UPDATE_COMMENT_FORM
} from "./ActionTypes";
import {initialState} from "./Store";

function handleDeleteComment(state, action) {
    const {commentId} = action.payload

    const indexOfDeleted = state.comments.findIndex(it => it.id === commentId);

    const commentToDelete = state.comments[indexOfDeleted]
    const deletedComment = Object.assign({}, commentToDelete, {
        deleted: true
    })

    const updatedComments = state.comments.slice()
    updatedComments[indexOfDeleted] = deletedComment

    return Object.assign({}, state, {
        comments: updatedComments
    })
}

function handleRestoreComment(state, action) {
    const commentId = action.payload.commentId
    const indexOfRestored = state.comments.findIndex(it => it.id === commentId)

    const commentToRestore = state.comments[indexOfRestored]
    const restoredComment = Object.assign({}, commentToRestore, {
        deleted: false
    })

    const updatedComments = state.comments.slice()
    updatedComments[indexOfRestored] = restoredComment

    return Object.assign({}, state, {
        comments: updatedComments
    })
}

function handleDeleteAnnouncement(state, action) {
    const announcementId = action.payload.id
    const indexOfDeleted = state.announcements.findIndex(it => it.id === announcementId)

    const announcementToDelete = state.announcements[indexOfDeleted]
    const deletedAnnouncement = Object.assign({}, announcementToDelete, {
        deleted: true
    })

    const deletedAnnouncements = state.announcements.slice()
    deletedAnnouncements[indexOfDeleted] = deletedAnnouncement

    return Object.assign({}, state, {
        announcements: deletedAnnouncements
    })
}

function handleRestoreAnnouncement(state, action) {
    const announcementId = action.payload.announcementId
    const indexOfDeleted = state.announcements.findIndex(it => it.id === announcementId)

    const announcementToDelete = state.announcements[indexOfDeleted]
    const deletedAnnouncement = Object.assign({}, announcementToDelete, {
        deleted: false
    })

    const deletedAnnouncements = state.announcements.slice()
    deletedAnnouncements[indexOfDeleted] = deletedAnnouncement

    return Object.assign({}, state, {
        announcements: deletedAnnouncements
    })
}

function handleDecAnnouncementField(state, action) {
    const announcementId = action.payload.announcementId
    const fieldName = action.payload.fieldName

    const prevAnnouncement = state.announcements.find(it => {
        return it.id === announcementId
    })

    const incrementedValue = prevAnnouncement[fieldName] -= 1

    const updatedAnnouncement = Object.assign({}, prevAnnouncement, {fieldName, incrementedValue})

    const updatedAnnouncements = state.announcements.slice()
    const indexOfUpdated = state.announcements.findIndex(it => it.id === announcementId);
    updatedAnnouncements[indexOfUpdated] = updatedAnnouncement

    return Object.assign({}, state, {
        announcements: updatedAnnouncements
    })
}

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

        case DEC_ANNOUNCEMENT_FIELD:
            return handleDecAnnouncementField(state, action)


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
            return handleDeleteAnnouncement(state, action)

        case RESTORE_ANNOUNCEMENT:
            return handleRestoreAnnouncement(state, action)

            // const id = action.payload.id
            //
            // return Object.assign({}, state, {
            //     announcements: state.announcements.filter(it => it.id !== id)
            // })

        case UPDATE_COMMENT_FORM:
            const updatedCommentFields = action.payload;

            const prevComment = state.commentForm
            const updatedComment = Object.assign({}, prevComment, updatedCommentFields)
            return Object.assign({}, state, {
                commentForm: updatedComment
            })

        case CLEAR_COMMENTS:
            return Object.assign({}, state, {
                comments: state.comments.filter(it => it.announcementId !== action.payload.announcementId)
            })

        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.concat(action.payload)
            })

        case DELETE_COMMENT:
            return handleDeleteComment(state, action)

        case RESTORE_COMMENT:
            return handleRestoreComment(state, action)

        default:
            return state;
    }
}



