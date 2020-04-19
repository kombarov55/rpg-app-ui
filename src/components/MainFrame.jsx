import React from "react"
import Announcement from "./Announcement";

class MainFrame extends React.Component {
    render() {
        return (
            <div className={"main-vertical"}>
                <div className={"main-frame-header"}>
                    <div className={"head-name"}>Название</div>
                    <div className={"head-logo"}>Логотип</div>
                </div>
                <div className={"main-frame-body"}>
                    <div className={"main-frame-view"}>
                        <div className={"main-frame-view-head"}>
                            <i className="pi pi-bars bars-icon" style={{"font-size": "5vmax"}}></i>
                            <span className={"main-frame-view-title"}>Доска объявлений</span>
                            <div></div>
                        </div>
                        <Announcement/>
                    </div>
                </div>
                <div className={"main-frame-footer"}>
                    <div className={"footer-copyright"}>Копирайты</div>
                    <div className={"footer-ads"}>Реклама текстовой строкой</div>
                </div>
            </div>
        );
    }
}

export default MainFrame