import React from "react";
import {announcementView} from "../View";
import {changeView} from "../data-layer/ActionCreators";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        currentView: state.currentView
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeView: (nextView) => dispatch(changeView(nextView))
    }
}

class ConnectedMenu extends React.Component {
    render() {
        return (
            <div className={"main-frame-nav"}>
                <div className={"head-logo"}>Логотип</div>
                <div className={"main-frame-nav-item"} onClick={() => this.props.changeView(announcementView)}>
                    <i className={"pi pi-list"} style={{"font-size": "6vmin"}}/> Доска объявлений
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-user"} style={{"font-size": "6vmin"}}/>
                    Мои объявления
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-heart"} style={{"font-size": "6vmin"}}/>
                    Избранное
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-envelope"} style={{"font-size": "6vmin"}}/>
                    Сообщения
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-users"} style={{"font-size": "6vmin"}}/>
                    Мои игры
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-id-card"} style={{"font-size": "6vmin"}}/>
                    Кабинет
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-ticket"} style={{"font-size": "6vmin"}}/>
                    Квесты
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-apple"} style={{"font-size": "6vmin"}}/>
                    Панель администратора
                </div>
            </div>
        )
    }
}

const AppMenu = connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);

export default AppMenu