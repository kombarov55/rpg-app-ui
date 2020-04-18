import React from "react"
import {Panel} from "primereact/panel"

class AnnouncementItem extends React.Component {
    render() {
        return (
            <Panel header={this.props.title}>
                {this.props.description}
            </Panel>
            // <div className={"announcement-view-list-item"}>
            //     <div className={"announcement-view-list-item-title"}>{this.props.title}</div>
            //     <div className={"announcement-view-list-item-description"}>{this.props.description}</div>
            //     <div className={"announcement-view-list-item-footer"}>
            //         <div className={"announcement-view-list-item-footer-item"}>В избранное</div>
            //         <div className={"announcement-view-list-item-footer-item"}>Откликнуться</div>
            //{        <div className={"announcement-view-list-item-footer-item"}>Связаться с автором</div>}
            //{        <div className={"announcement-view-list-item-footer-item"}>Комментарии (0)</div>}
            //{    </div>}
            // </div>
        )
    }
}

export default AnnouncementItem;