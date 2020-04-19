import React from "react"
import Announcement from "./Announcement";
import {Sidebar} from "primereact/sidebar";
import {Button} from "primereact/button";


class MainFrame extends React.Component {
    state = {
        visible: false
    }

    render() {
        return (
            <div className={"main-vertical"}>
                <div className={"main-frame-header"}>
                    <div className={"head-name"}>Название</div>
                    <div className={"head-logo"}>Логотип</div>
                </div>
                <div className={"main-frame-body"}>
                    <Sidebar visible={this.state.visible} onHide={() => this.setState({visible: false})}>
                        <div>Доска объявлений</div>
                        <div>Мои объявления</div>
                        <div>Избранное</div>
                        <div>Сообщения</div>
                        <div>Мои игры</div>
                        <div>Кабинет</div>
                        <div>Квесты</div>
                        <div>Панель администратора</div>
                    </Sidebar>
                    <div className={"main-frame-view"}>
                        <div className={"main-frame-view-head"}>
                            <i className="pi pi-bars bars-icon" style={{"font-size": "5vmax"}} onClick={ () => this.setState({visible: true})}></i>
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