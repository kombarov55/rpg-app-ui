import React from "react";
import AnnouncementItem from "./AnnouncementItem";
import {Panel} from "primereact/panel";
import {Button} from "primereact/button";
import {Card} from "primereact/card";

class Announcement extends React.Component {
    render() {
        return (
            <div className={"announcement-view-vertical"}>
                <div className={"announcement-view-header"}>
                    <span className={"announcement-view-header-all-items-label"}>Все объявления</span>
                    <span className={"announcement-view-header-filters-label"}>фильтры</span>
                </div>
                <div className={"announcement-view-list"}>
                    <AnnouncementItem title={"Объявление №1"} description={"бла-бла-бла"}/>
                    <AnnouncementItem title={"Объявление №2"} description={" бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла бла-бла-бла"}/>
                </div>
            </div>
        );
    }
}

export default Announcement;