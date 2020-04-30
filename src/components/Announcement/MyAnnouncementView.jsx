import React from "react";
import {connect} from "react-redux";
import ConnectedAnnouncementView from "./ConnectedAnnouncementView";

function mapStateToProps(state, props) {
    return {
        announcements: state.announcements
    }
}

export default connect(mapStateToProps)(ConnectedAnnouncementView)

