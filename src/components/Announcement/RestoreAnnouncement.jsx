import React from "react";
import {get} from "../../util/Http";
import {restoreAnnouncementUrl} from "../../util/Parameters";
import {restoreAnnouncement} from "../../data-layer/ActionCreators";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch, props) {
    return {
        restoreInStore: () => dispatch(restoreAnnouncement(props.id))
    }
}

function RestoreAnnouncement(props) {

    function onLinkClicked() {
        get(restoreAnnouncementUrl(props.id))
            .then(() => props.restoreInStore())
    }

    return (
        <div className={"restore-announcement"}>
            <div className={"restore-announcement-text"}>
                Объявление удалено
            </div>
            <div className={"restore-announcement-link"} onClick={() => onLinkClicked()}>
                [Восстановить]
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(RestoreAnnouncement)