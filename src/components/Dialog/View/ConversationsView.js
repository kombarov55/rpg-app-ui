import React from "react";

function ConversationsView(props) {
    return (
        <div className={"conversations-view"}>
            <div className={"conversations-view-item"}>
                <img className={"conversations-view-companion-img"}
                     src={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}/>
                <div className={"conversations-view-content"}>
                    <div className={"conversations-view-content-head"}>
                        <div className={"conversations-view-companion-fullname"}>Николай Комбаров</div>
                        <div className={"conversations-view-last-msg-date"}>01/08/1997 11:23</div>
                    </div>
                    <div className={"conversations-view-last-msg-text"}>
                        Как дела?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConversationsView