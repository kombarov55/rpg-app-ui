export default function (
    url,
    onMsgReceived,
    onError = () => alert("error while longpolling")
) {

    function start() {
        console.log("longpoll start")
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url, true)
        xhr.send()
        xhr.onload = function() {
            if ((xhr.status + "").startsWith("2")) {
                onMsgReceived(xhr.responseText)
                console.log("longpoll received: ")
                console.log(xhr.responseText)
                start()
            }  else {
                onError()
            }
        }
    }


    return {
        start: start
    }

}