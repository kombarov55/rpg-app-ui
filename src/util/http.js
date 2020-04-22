export function get(url) {
    return fetch(url)
}

export async function post(url, body) {
    console.log(body)
    return fetch(url, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json;charset=utf-8'
        }),
        body: body
    })
}