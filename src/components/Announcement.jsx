import React from "react";
import AnnouncementItem from "./AnnouncementItem";
import {connect} from "react-redux";
import {addAnnouncement} from "../data-layer/ActionCreators";

function mapStateToProps(state) {
    return {
        announcements: state.announcements
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addAnouncement: () => dispatch(addAnnouncement("#1", "", "", 1, 1, "бла бла бла бла", false, true))
    }
}

class ConnectedAnnouncement extends React.Component {
    state = {
        creationDialogVisible: false
    }

    onCreationButtonClicked() {
        this.props.addAnouncement()
    }

    render() {
        return (
            <div className={"announcement-view-vertical"}>
                <div className={"announcement-view-header"}>
                    <span className={"announcement-view-header-all-items-label"}>Все объявления</span>
                    <span className={"announcement-view-header-filters-label"}>фильтры</span>
                    <span className={"announcement-view-header-filters-label"}
                          onClick={() => this.onCreationButtonClicked()}>Создать объявление</span>
                </div>
                <div className={"announcement-view-list"}>{
                    this.props.announcements.map(announcement => (
                        <AnnouncementItem title={announcement.title} description={announcement.description}/>
                    ))
                }</div>
            </div>
        );
    }
}

const Announcement = connect(mapStateToProps, mapDispatchToProps)(ConnectedAnnouncement)

export default Announcement;