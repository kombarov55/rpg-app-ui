import React from "react"
import {
    addComment, toggleFavoriteAnnouncement,
    clearComments,
    deleteAnnouncement, changeView, addConversation
} from "../../data-layer/ActionCreators";
import {connect} from "react-redux";
import {deleteAnnouncementFromServer} from "../../util/HttpRequests";
import CommentSection from "./Comment/CommentSection";
import {get, patch, post} from "../../util/Http";
import {commentUrl, conversationUrl, toggleFavAnnouncementUrl} from "../../util/Parameters";
import FormatDate from "../../util/FormatDate";
import Globals from "../../util/Globals";
import {conversationListView} from "../../Views";

function mapStateToProps(state, props) {
    return {
        favAnnouncements: state.userAccount.userAccountPreferences.favAnnouncementIds
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        deleteAnnouncement: (id) => {
            deleteAnnouncementFromServer(id)
                .then(() => dispatch(deleteAnnouncement(id)))
        },
        clearComments: () => dispatch(clearComments(props.id)),
        addComment: (comment) => dispatch(addComment(comment)),
        toggleFavorite: () => dispatch(toggleFavoriteAnnouncement(props.id)),
        changeViewToDialogs: () => dispatch(changeView(conversationListView)),
        addConversation: conversation => dispatch(addConversation(conversation))
    }
}

class ConnectedAnnouncementItem extends React.Component {

    renderChips() {
        const values = []

        if (this.props.sex !== null) {
            values.push(this.props.sex)
        }

        if (this.props.gameType !== null) {
            values.push(this.props.gameType)
        }

        if (this.props.minAge !== null) {
            values.push("Мин возраст: " + this.props.minAge)
        }

        if (this.props.maxAge !== null) {
            values.push("Макс возраст: " + this.props.maxAge)
        }

        return values.map(str => <span key={str} className="announcement-view-chip">{str}</span>)
    }

    onCommentsClicked() {
        this.props.clearComments()
        get(commentUrl(this.props.id))
            .then(rs => rs.forEach(it => this.props.addComment(it)))
            .then(() => this.setState({commentSectionVisible: !this.state.commentSectionVisible}))
    }

    onFavoriteClicked() {
        this.props.toggleFavorite()
        patch(toggleFavAnnouncementUrl(Globals.userId), JSON.stringify({announcementId: this.props.id}))
    }

    onMailAuthorClicked() {
        post(conversationUrl, JSON.stringify({
            userId: Globals.userId,
            companionUserId: this.props.authorId
        })).then(x => this.props.addConversation(x))
            .then(() => this.props.changeViewToDialogs())
    }

    state = {
        commentSectionVisible: false
    }

    render() {
        return (
            <div className={"announcement-view-list-item"}>
                <div className={"announcement-view-list-item-author-header"}>
                    <img
                        className={"announcement-view-list-item-author-header-img"}
                        src={this.props.anonymous ? "./img/anon-img.jpg" : this.props.imgSrc}/>
                    <div className={"announcement-view-list-item-author-header-vertical"}>
                        <div className={"announcement-view-list-item-author-header-fullname"}>
                            {this.props.anonymous ? "Аноним" : this.props.authorFullName}
                        </div>
                        <div className={"announcement-view-list-item-author-header-time"}>
                            {FormatDate(new Date(this.props.creationDate))}
                        </div>
                    </div>
                </div>
                <div className={"announcement-view-list-item-title"}>{this.props.title}</div>
                <div className={"announcement-view-list-item-description"}>{this.props.description}</div>
                <div className={"announcement-view-chips-list"}>
                    {this.renderChips()}
                </div>
                <div className={"announcement-view-list-item-footer"}>
                    <div className={"announcement-view-list-item-footer-item"}
                         onClick={() => this.onFavoriteClicked()}>
                        {/*В избранное*/}
                        {
                            this.props.favAnnouncements.some(it => it === this.props.id) ?
                                <i className={"pi pi-star"}/> :
                                <i className={"pi pi-star-o"}/>
                        }

                    </div>
                    <div className={"announcement-view-list-item-footer-item"}>
                        {/*Откликнуться*/}
                        <i className={"pi pi-user-plus"}/>
                    </div>
                    {!this.props.anonymous &&
                    <div className={"announcement-view-list-item-footer-item"}
                         onClick={() => this.onMailAuthorClicked()}>
                        {/*Связаться с автором*/}
                        <i className={"pi pi-envelope"}/>
                    </div>
                    }
                    { this.props.commentsEnabled &&
                        <div className={"announcement-view-list-item-footer-item"}
                             onClick={() => this.onCommentsClicked()}>
                            {/*Комментарии (0)*/}
                            <i className={"pi pi-comments"}/>
                            {this.props.commentsCount}
                        </div>
                    }
                    <div className={"announcement-view-list-item-footer-item"}
                         onClick={() => this.props.deleteAnnouncement(this.props.id)}>
                        <i className={"pi pi-times"}/>
                    </div>
                </div>
                {this.state.commentSectionVisible && <CommentSection announcementId={this.props.id}/>}

            </div>
        )
    }
}

const AnnouncementItem = connect(mapStateToProps, mapDispatchToProps)(ConnectedAnnouncementItem);

export default AnnouncementItem;