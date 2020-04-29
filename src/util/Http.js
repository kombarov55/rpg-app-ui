import Globals from "./Globals";

export function get(url) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.setRequestHeader("Authorization", "Bearer " + Globals.authToken)
    xhr.send()
    return JSON.parse(xhr.response)
}

export async function post(url, body) {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", url, false)
    xhr.setRequestHeader("Authorization", "Bearer " + Globals.authToken)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(body)

    const response = xhr.response;
    return JSON.parse(response)
}

export async function httpDelete(url) {
    const xhr = new XMLHttpRequest()
    xhr.open("DELETE", url, false)
    xhr.setRequestHeader("Authorization", "Bearer " + Globals.authToken)
    xhr.send()
    return xhr.response
}