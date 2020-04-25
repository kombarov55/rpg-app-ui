import {announcementUrl} from "./properties";
import {store} from "../data-layer/Store";
import {addAnnouncement} from "../data-layer/ActionCreators";
import {loginUrl} from "./properties";
import {get, setAuthToken} from "./http";

function loadAnnouncements() {
    const response = get(announcementUrl)
    console.log(response)

    response.forEach(item =>
        store.dispatch(addAnnouncement(
            item.id,
            item.title,
            item.gameType,
            item.sex,
            item.minAge,
            item.maxAge,
            item.description,
            item.anonymous,
            item.commentsEnabled
        )))
}

function saveAuthToken() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const userId = urlSearchParams.get("user_id")

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
        .then(json => setAuthToken(json["token"]))
}

export function onStartup() {
    saveAuthToken().then(ignore => {
        loadAnnouncements()
    })


}