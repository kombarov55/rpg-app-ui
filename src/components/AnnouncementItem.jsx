import React from "react"
import {Card} from "primereact/card"

class AnnouncementItem extends React.Component {
    style = {
        margin: "0.5vh 1vw"
    };

    render() {
        return (
            <div className={"announcement-view-list-item"}>
                <div className={"announcement-view-list-item-title"}>{this.props.title}</div>
                <div className={"announcement-view-list-item-description"}>{this.props.description}</div>
                <div className={"announcement-view-chips-list"}>
                    <span className="announcement-view-chip">ЛС</span>
                    <span className="announcement-view-chip">М</span>
                    <span className="announcement-view-chip">Мин возраст: 10</span>
                    <span className="announcement-view-chip">Макс. возраст: 30</span>
                </div>
                <div className={"announcement-view-list-item-footer"}>
                    <div className={"announcement-view-list-item-footer-item"}>В избранное</div>
                    <div className={"announcement-view-list-item-footer-item"}>Откликнуться</div>
                    <div className={"announcement-view-list-item-footer-item"}>Связаться с автором</div>
                    <div className={"announcement-view-list-item-footer-item"}>Комментарии (0)</div>
                </div>
            </div>
        )
    }
}

export default AnnouncementItem;