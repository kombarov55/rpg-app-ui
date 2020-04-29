import React from "react";

function Comment(props) {

    return (
        <div className={"comment"}>
            <img
                className={"comment-author-image"}
                src={props.authorImgSrc}/>
            <div className={"comment-content"}>
                <div className={"comment-author-name"}>{props.authorFullName}</div>
                <div className={"comment-text"}>{props.text}</div>
                <div className={"comment-creation-date"}>{new Date(props.creationDate).toUTCString()}</div>
            </div>
        </div>
    )
}

export default Comment