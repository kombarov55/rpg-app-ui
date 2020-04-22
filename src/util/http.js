export function get(url) {
    return fetch(url, {
        mode: "no-cors"
    })
}

export async function post(url, body) {
    return fetch(url, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json;charset=utf-8'
        }),
        body: body
    })
}

export async function httpDelete(url) {
    return fetch(url, {
        method: "DELETE",
        headers: new Headers({
            'Content-Type': 'application/json;charset=utf-8'
        })
    })
}