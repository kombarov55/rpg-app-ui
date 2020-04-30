import React from "react"
import {addComment, clearComments, deleteAnnouncement, deleteComments} from "../../data-layer/ActionCreators";
import {connect} from "react-redux";
import {deleteAnnouncementFromServer} from "../../util/HttpRequests";
import CommentSection from "./Comment/CommentSection";
import {get} from "../../util/Http";
import {commentUrl} from "../../util/Parameters";
import FormatDate from "../../util/FormatDate";

function mapDispatchToProps(dispatch, props) {
    return {
        deleteAnnouncement: (id) => {
            deleteAnnouncementFromServer(id)
                .then(() => dispatch(deleteAnnouncement(id)))
        },
        clearComments: () => dispatch(clearComments(props.id)),
        addComment: (comment) => dispatch(addComment(comment))
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
                    {/*<span className="announcement-view-chip">{this.props.gameType}</span>*/}
                    {/*<span className="announcement-view-chip">{this.props.sex}</span>*/}
                    {/*<span className="announcement-view-chip">Мин возраст: {this.props.minAge}</span>*/}
                    {/*<span className="announcement-view-chip">Макс. возраст: {this.props.maxAge}</span>*/}
                </div>
                <div className={"announcement-view-list-item-footer"}>
                    <div className={"announcement-view-list-item-footer-item"}>
                        {/*В избранное*/}
                        <i className={"pi pi-star"}/>
                    </div>
                    <div className={"announcement-view-list-item-footer-item"}>
                        {/*Откликнуться*/}
                        <i className={"pi pi-user-plus"}/>
                    </div>
                    {this.props.anonymous &&
                    <div className={"announcement-view-list-item-footer-item"}>
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

const AnnouncementItem = connect(null, mapDispatchToProps)(ConnectedAnnouncementItem);

export default AnnouncementItem;