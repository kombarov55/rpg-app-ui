import React from "react"

class MainFrame extends React.Component {
    render() {
        return (
            <div className={"main-vertical"}>
                <div className={"head"}>
                    <div className={"head-name"}>Название</div>
                    <div className={"head-logo"}>Логотип</div>
                </div>
                <div className={"main-frame-body"}>
                    <div className={"main-frame-nav"}>
                        <div className={"main-frame-nav-item"}>Доска объявлений</div>
                        <div className={"main-frame-nav-item"}>Мои объявления</div>
                        <div className={"main-frame-nav-item"}>Избранное</div>
                        <div className={"main-frame-nav-item"}>Сообщения</div>
                        <div className={"main-frame-nav-item"}>Мои игры</div>
                        <div className={"main-frame-nav-item"}>Кабинет</div>
                        <div className={"main-frame-nav-item"}>Квесты</div>
                        <div className={"main-frame-nav-item"}>Панель администратора</div>
                    </div>
                    <div className={"main-frame-view"}>
                        <div className={"main-frame-view-title"}>Доска объявлений</div>
                        <span className={"button"}>Подать объявление</span>
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