import React from "react";

function ConversationItem(props) {
    return (
        <div className={"conversations-view-item"}>
            <img className={"conversations-view-companion-img"}
                 src={props.companionImgSrc}/>
            <div className={"conversations-view-content"}>
                <div className={"conversations-view-companion-fullname"}>{props.companionFullName}</div>
                <div className={"conversations-view-last-msg-date"}>{props.msgDateFormatted}</div>
                <div className={"conversations-view-last-msg-text"}>{props.text}</div>
            </div>
        </div>
    )
}

export default ConversationItem