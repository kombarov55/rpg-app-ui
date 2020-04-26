import {post, httpDelete} from "./Http";
import {announcementUrl} from "./Parameters";

export async function createAnnouncement(
    title,
    gameType,
    sex,
    minAge,
    maxAge,
    description,
    anonymous,
    commentsEnabled,
    uploadUid
) {
    const body = {
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
    const json = JSON.stringify(body);

    return post(announcementUrl, json)
}

export async function deleteAnnouncementFromServer(id) {
    return httpDelete(announcementUrl + "/" + id)
}