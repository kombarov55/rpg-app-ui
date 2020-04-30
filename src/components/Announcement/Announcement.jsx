import React from "react";
import AnnouncementItem from "./AnnouncementItem";
import {connect} from "react-redux";
import {changeView, addAnnouncement} from "../../data-layer/ActionCreators";
import {announcementCreationView} from "../../View";
import RestoreAnnouncement from "./RestoreAnnouncement";

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

class ConnectedAnnouncement extends React.Component {
    render() {
        return (
            <div className={"announcement-view-vertical"}>
                <div className={"announcement-view-header"}>
                    {/*<span className={"announcement-view-header-all-items-label"}>Все объявления</span>*/}
                    <span className={"announcement-view-header-filters-label"}>
                        <i className={"pi pi-filter"}/>
                    </span>
                    <span className={"announcement-view-header-filters-label"}
                          onClick={() => this.props.changeViewToCreation()}>
                        <i className={"pi pi-plus-circle"}/>
                    </span>
                </div>
                <div className={"announcement-view-list"}>
                    {
                        this.props.announcements.map(announcement =>
                            announcement.deleted ?
                                <RestoreAnnouncement
                                    key={announcement.id}
                                    id={announcement.id}
                                /> :
                                <AnnouncementItem
                                    key={announcement.id}
                                    authorFullName={announcement.authorFullName}
                                    imgSrc={announcement.imgSrc}
                                    creationDate={announcement.creationDate}
                                    id={announcement.id}
                                    title={announcement.title}
                                    description={announcement.description}
                                    minAge={announcement.minAge}
                                    maxAge={announcement.maxAge}
                                    sex={announcement.sex}
                                    gameType={announcement.gameType}
                                    anonymous={announcement.anonymous}
                                    commentsEnabled={announcement.commentsEnabled}
                                    commentsCount={announcement.commentsCount}
                                />
                        )
                    }</div>
            </div>
        );
    }
}

const Announcement = connect(mapStateToProps, mapDispatchToProps)(ConnectedAnnouncement)

export default Announcement;