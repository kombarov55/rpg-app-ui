import React from "react"

class AnnouncementItem extends React.Component {
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
                </div>
            </div>
        )
    }
}

export default AnnouncementItem;