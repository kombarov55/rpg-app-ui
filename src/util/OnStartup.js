import {announcementUrl} from "./Parameters";
import {store} from "../data-layer/Store";
import {addAnnouncement} from "../data-layer/ActionCreators";
import {loginUrl} from "./Parameters";
import {get} from "./Http";
import Globals from "./Globals";

function loadAnnouncements() {
    const response = get(announcementUrl)
    console.log(response)

    response.forEach(item =>
        store.dispatch(addAnnouncement(
            item.id,
            item.authorFullName,
            item.imgSrc,
            item.creationDate,
            item.title,
            item.gameType,
            item.sex,
            item.minAge,
            item.maxAge,
            item.description,
            item.anonymous,
            item.commentsEnabled,
            "",
            item.commentsCount
        )))
}

function saveAuthToken() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const userId = urlSearchParams.get("user_id")
    Globals.userId = userId

    return fetch(loginUrl, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json;charset=utf-8'
        }),
        body: JSON.stringify({
            login: userId
        })
    })
        .then(rs => rs.json())
        .then(json => Globals.authToken = json["token"])
}

export function onStartup() {
    saveAuthToken().then(ignore => {
        loadAnnouncements()
    })


}