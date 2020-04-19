import React from "react";
import AnnouncementItem from "./AnnouncementItem";
import {Panel} from "primereact/panel";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {OverlayPanel} from "primereact/overlaypanel";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import AnnoucementCreation from "./AnnoucementCreation";

class Announcement extends React.Component {
    state = {
        creationDialogVisible: false
    }

    render() {
        return (
            <div className={"announcement-view-vertical"}>
                <div className={"announcement-view-header"}>
                    <span className={"announcement-view-header-all-items-label"}>Все объявления</span>
                    <span className={"announcement-view-header-filters-label"}>фильтры</span>
                    <span className={"announcement-view-header-filters-label"} onClick={(e) => this.setState({creationDialogVisible: true})}>Создать объявление</span>
                </div>
                <div className={"announcement-view-list"}>
                    <AnnouncementItem title={"Объявление №1"} description={"бла-бла-бла"}/>
                    <AnnouncementItem title={"Объявление №2"}
                                      description={" бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла"}/>
                </div>
            </div>
        );
    }
}

export default Announcement;