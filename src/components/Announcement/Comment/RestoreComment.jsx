import React from "react";
import {get} from "../../../util/Http";
import {restoreCommentUrl} from "../../../util/Parameters";
import {incAnnouncementField, restoreComponent} from "../../../data-layer/ActionCreators";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch, props) {
    return {
        restoreInStore: () => dispatch(restoreComponent(props.id)),
        incCommentsCount: () => dispatch(incAnnouncementField(props.announcementId, "commentsCount"))
    }
}

function RestoreComment(props) {

    function onLinkClicked() {
        get(restoreCommentUrl(props.announcementId, props.id))
            .then(() => props.restoreInStore())
            .then(() => props.incCommentsCount())
    }

    return (
        <div className={"restore-comment"}>
            <div className={"restore-comment-text"}>
                Комментарий удалён
            </div>
            <div className={"restore-comment-link"} onClick={() => onLinkClicked()}>
                [Восстановить]
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(RestoreComment)
