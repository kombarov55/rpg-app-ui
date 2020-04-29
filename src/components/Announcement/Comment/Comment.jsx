import React from "react";
import {httpDelete} from "../../../util/Http";
import {deleteCommentUrl} from "../../../util/Parameters";
import {deleteComments} from "../../../data-layer/ActionCreators";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch, props) {
    return {
        deleteCommentFromStore: () => dispatch(deleteComments(props.id))
    }
}

function Comment(props) {

    function onDeleteClicked() {
        httpDelete(deleteCommentUrl(props.announcementId, props.id))
            .then(() => props.deleteCommentFromStore())
    }

    return (
        <div className={"comment"}>
            <img
                className={"comment-author-image"}
                src={props.authorImgSrc}/>
            <div className={"comment-content"}>
                <div className={"comment-content-header"}>
                    <div className={"comment-author-name"}>{props.authorFullName}</div>
                    <i
                        className={"pi pi-times"}
                        onClick={() => onDeleteClicked()}
                    />
                </div>
                <div className={"comment-text"}>{props.text}</div>
                <div className={"comment-creation-date"}>{new Date(props.creationDate).toUTCString()}</div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Comment)