export function get(url) {
    return fetch(url)
}

export async function post(url, body) {
    return fetch(url, {
        method: "POST",
        body: body,
        mode: "no-cors"
    })
}