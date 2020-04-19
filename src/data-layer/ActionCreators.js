import {GameTypes} from "./enums/GameType";
import {Sex} from "./enums/Sex";
import {ADD_ANNOUNCEMENT, CHANGE_VIEW} from "./ActionTypes";
import {announcementView} from "../View";

export function changeView(nextView = announcementView) {
    return {
        type: CHANGE_VIEW,
        payload: {
            nextView: nextView
        }
    }
}

export function addAnnouncement(
    title = "",
    gameType = GameTypes.LS,
    sex = Sex.FEMALE,
    minAge = 6,
    maxAge = 99,
    description = "",
    anonymous = false,
    commentsEnabled = true
) {
    return {
        type: ADD_ANNOUNCEMENT,
        payload: {
            title: title,
            gameType: gameType,
            sex: sex,
            minAge: minAge,
            maxAge: maxAge,
            description: description,
            anonymous: anonymous,
            commentsEnabled: commentsEnabled
        }
    }
}