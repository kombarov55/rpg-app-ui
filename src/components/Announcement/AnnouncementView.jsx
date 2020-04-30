import React from "react";
import {connect} from "react-redux";
import {changeView} from "../../data-layer/ActionCreators";
import {announcementCreationView} from "../../View";
import ConnectedAnnouncementView from "./ConnectedAnnouncementView";

function mapStateToProps(state) {
    return {
        announcements: state.announcements
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeViewToCreation: () => dispatch(changeView(announcementCreationView))
    }
}

const AnnouncementView = connect(mapStateToProps, mapDispatchToProps)(ConnectedAnnouncementView)

export default AnnouncementView;