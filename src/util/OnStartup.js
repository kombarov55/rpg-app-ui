import {announcementUrl} from "./properties";
import {store} from "../data-layer/Store";
import {addAnnouncement} from "../data-layer/ActionCreators";

function loadAnnouncements() {
    fetch(announcementUrl)
        .then(response => response.json())
        .then(rs => rs.forEach(item =>
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
            ))))
}

export function onStartup() {
    loadAnnouncements()
}