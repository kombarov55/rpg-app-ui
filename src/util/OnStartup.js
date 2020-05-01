import {announcementUrl, userAccountUrl} from "./Parameters";
import {store} from "../data-layer/Store";
import {addAnnouncement, addAnnouncementDeprecated, addUserAccount} from "../data-layer/ActionCreators";
import {loginUrl} from "./Parameters";
import {get} from "./Http";
import Globals from "./Globals";

async function loadAnnouncements() {
    get(announcementUrl)
        .then(xs =>
            xs.forEach(x =>
                store.dispatch(addAnnouncement(x))))
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
    const ws = new WebSocket("ws://localhost:8081/echo")

    ws.onopen = function() {
        console.log('Info: Connection Established.');
    };

    ws.onmessage = function(event) {
        console.log(event.data);
    };

    ws.onclose = function(event) {
        console.log('Info: Closing Connection.');
    };

    ws.onerror = function(event) {
        console.log('Info: error');
    };

    saveAuthToken().then(() => {
        get(userAccountUrl(Globals.userId))
            .then(rs => store.dispatch(addUserAccount(rs)))
        loadAnnouncements()
    })


}