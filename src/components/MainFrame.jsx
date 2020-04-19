import React from "react"
import Announcement from "./Announcement";
import AnnoucementCreation from "./AnnoucementCreation";

const announcementView = <Announcement/>
const announcementCreationView = <AnnoucementCreation/>

class MainFrame extends React.Component {

    state = {
        currentView: announcementView
    }

    onChangeViewClicked(nextView) {
        this.setState({currentView: nextView})
    }

    render() {
        return (
            <div className={"main-vertical"}>
                <div className={"main-frame-header"}>
                    <div className={"head-name"}>Название</div>
                    <div className={"head-logo"}>Логотип</div>
                </div>
                <div className={"main-frame-body"}>
                    <div className={"main-frame-nav"}>
                        <div className={"main-frame-nav-item"} onClick={() => this.onChangeViewClicked(announcementView)}>Доска объявлений</div>
                        <div className={"main-frame-nav-item"} onClick={() => this.onChangeViewClicked(announcementCreationView)}>Мои объявления</div>
                        <div className={"main-frame-nav-item"}>Избранное</div>
                        <div className={"main-frame-nav-item"}>Сообщения</div>
                        <div className={"main-frame-nav-item"}>Мои игры</div>
                        <div className={"main-frame-nav-item"}>Кабинет</div>
                        <div className={"main-frame-nav-item"}>Квесты</div>
                        <div className={"main-frame-nav-item"}>Панель администратора</div>
                    </div>
                    <div className={"main-frame-view"}>
                        <span className={"main-frame-view-title"}>Доска объявлений</span>

                        {this.state.currentView}
                        {/*<Announcement/>*/}
                        {/*<AnnoucementCreation/>*/}
                    </div>
                </div>
                <div className={"main-frame-footer"}>
                    <div className={"footer-copyright"}>Копирайты</div>
                    <div className={"footer-copyright"}>Реклама текстовой строкой</div>
                </div>
            </div>
        );
    }
}

export default MainFrame