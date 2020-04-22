import {post, httpDelete} from "./http";
import {announcementUrl} from "./properties";

export async function createAnnouncement(
    title,
    gameType,
    sex,
    minAge,
    maxAge,
    description,
    anonymous,
    commentsEnabled
) {
    const body = {
        title: title,
        gameType: gameType,
        sex: sex,
        minAge: minAge,
        maxAge: maxAge,
        description: description,
        anonymous: anonymous,
        commentsEnabled: commentsEnabled
    }
    const json = JSON.stringify(body);
    const responsePromise = post(announcementUrl, json)

    return responsePromise.then(value => value.json())
}

export async function deleteAnnouncementFromServer(id) {
    return httpDelete(announcementUrl + "/" + id)
}