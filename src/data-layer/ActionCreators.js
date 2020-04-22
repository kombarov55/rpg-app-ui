import {GameTypes} from "./enums/GameType";
import {Sex} from "./enums/Sex";
import {
    ADD_ANNOUNCEMENT,
    CHANGE_VIEW,
    DELETE_ANNOUNCEMENT,
    EDIT_ANNOUNCEMENT_FORM,
    TOGGLE_SIDEBAR
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
    title = "",
    gameType = GameTypes.LS,
    sex = Sex.FEMALE,
    minAge = 6,
    maxAge = 99,
    description = "",
    anonymous = false,
    commentsEnabled = true,
    uploadUid = ""
) {
    return {
        type: ADD_ANNOUNCEMENT,
        payload: {
            id: id,
            title: title,
            gameType: gameType,
            sex: sex,
            minAge: minAge,
            maxAge: maxAge,
            description: description,
            anonymous: anonymous,
            commentsEnabled: commentsEnabled,
            uploadUid: uploadUid
        }
    }
}

export function updateAnnoncementForm(obj) {
    return {
        type: EDIT_ANNOUNCEMENT_FORM,
        payload: obj
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