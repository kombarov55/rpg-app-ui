import {GameTypes} from "./enums/GameType";
import {Sex} from "./enums/Sex";
import {
    ADD_ANNOUNCEMENT,
    CHANGE_VIEW, CLEAR_ANNOUNCEMENT_FORM,
    DELETE_ANNOUNCEMENT,
    EDIT_ANNOUNCEMENT_FORM, INC_ANNOUNCEMENT_FIELD,
    TOGGLE_SIDEBAR, UPDATE_ANNOUNCEMENT, UPDATE_COMMENT_FORM
} from "./ActionTypes";
import {announcementView} from "../View";

export function changeView(nextView = announcementView) {
    return {
        type: CHANGE_VIEW,
        payload: {
            nextView: nextView
        }
    }
}

export function toggleSidebar() {
    return {
        type: TOGGLE_SIDEBAR
    }
}

export function addAnnouncement(
    id = "",
    authorFullName,
    imgSrc,
    creationDate = new Date().getTime(),
    title = "",
    gameType = GameTypes.LS,
    sex = Sex.FEMALE,
    minAge = 6,
    maxAge = 99,
    description = "",
    anonymous = false,
    commentsEnabled = true,
    uploadUid = "",
    commentsCount = 0
) {
    return {
        type: ADD_ANNOUNCEMENT,
        payload: {
            id: id,
            authorFullName: authorFullName,
            imgSrc: imgSrc,
            creationDate: creationDate,
            title: title,
            gameType: gameType,
            sex: sex,
            minAge: minAge,
            maxAge: maxAge,
            description: description,
            anonymous: anonymous,
            commentsEnabled: commentsEnabled,
            uploadUid: uploadUid,
            commentsCount: commentsCount
        }
    }
}

export function updateAnnouncement(announcementId, fieldNameToValue) {
    return {
        type: UPDATE_ANNOUNCEMENT,
        payload: {
            announcementId: announcementId,
            fieldNameToValue: fieldNameToValue
        }
    }
}

export function incAnnouncementField(announcementId, fieldName) {
    return {
        type: INC_ANNOUNCEMENT_FIELD,
        payload: {
            announcementId: announcementId,
            fieldName: fieldName
        }
    }
}

export function updateAnnoncementForm(obj) {
    return {
        type: EDIT_ANNOUNCEMENT_FORM,
        payload: obj
    }
}

export function clearAnnouncementForm() {
    return {
        type: CLEAR_ANNOUNCEMENT_FORM
    }
}

export function deleteAnnouncement(id) {
    return {
        type: DELETE_ANNOUNCEMENT,
        payload: {
            id: id
        }
    }
}

export function updateCommentForm(obj) {
    return {
        type: UPDATE_COMMENT_FORM,
        payload: obj
    }
}