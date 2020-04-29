import React from "react"
import {GameTypes} from "../data-layer/enums/GameType";
import {Sex} from "../data-layer/enums/Sex";
import {deleteAnnouncement} from "../data-layer/ActionCreators";
import {connect} from "react-redux";
import {deleteAnnouncementFromServer} from "../util/HttpRequests";

function mapDispatchToProps(dispatch) {
    return {
        deleteAnnouncement: (id) => {
            deleteAnnouncementFromServer(id)
                .then(() => dispatch(deleteAnnouncement(id)))
        }
    }
}

class ConnectedAnnouncementItem extends React.Component {

    renderChips() {
        const values = []

        if (this.props.sex !== undefined) {
            const enumObj = Sex[this.props.sex];
            if (enumObj !== undefined) {
                values.push(enumObj.description)
            }
        }

        if (this.props.gameType !== undefined) {
            const enumObj = GameTypes[this.props.gameType];
            if (enumObj !== undefined) {
                values.push(enumObj.description)
            }
        }

        if (this.props.minAge !== null) {
            values.push("Мин возраст: " + this.props.minAge)
        }

        if (this.props.maxAge !== null) {
            values.push("Макс возраст: " + this.props.maxAge)
        }

        return values.map(str => <span key={str} className="announcement-view-chip">{str}</span>)
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
                        <div className={"announcement-view-list-item-author-header-time"}>{new Date(this.props.creationDate).toUTCString()}</div>
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
                    <div className={"announcement-view-list-item-footer-item"}>
                        {/*Связаться с автором*/}
                        <i className={"pi pi-envelope"}/>
                    </div>
                    <div className={"announcement-view-list-item-footer-item"}>
                        {/*Комментарии (0)*/}
                        <i className={"pi pi-comments"}/>
                    </div>
                    <div className={"announcement-view-list-item-footer-item"}
                         onClick={() => this.props.deleteAnnouncement(this.props.id)}>
                        <i className={"pi pi-times"}/>
                    </div>
                </div>
            </div>
        )
    }
}

const AnnouncementItem = connect(null, mapDispatchToProps)(ConnectedAnnouncementItem);

export default AnnouncementItem;