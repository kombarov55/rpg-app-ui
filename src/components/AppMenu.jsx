import React from "react";
import {
    announcementCreationView,
    announcementView,
    conversationsView,
    favoriteAnnouncementView,
    myAnnouncementView
} from "../Views";
import {changeView, toggleSidebar} from "../data-layer/ActionCreators";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        currentView: state.currentView
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeView: (nextView) => dispatch(changeView(nextView)),
        toggleSidebar: () => dispatch(toggleSidebar())
    }
}

class ConnectedMenu extends React.Component {

    onItemClicked(nextView) {
        this.props.changeView(nextView)
        this.props.toggleSidebar()
    }

    render() {
        return (
            <div className={"main-frame-nav"}>
                <div className={"head-logo"}>Логотип</div>
                <div className={"main-frame-nav-item"}
                     onClick={() => this.onItemClicked(announcementView)}>
                    <i className={"pi pi-list"} style={{"fontSize": "6vmin"}}/>
                    Доска объявлений
                </div>
                <div className={"main-frame-nav-item"}
                     onClick={() => this.onItemClicked(myAnnouncementView)}>
                    <i className={"pi pi-user"} style={{"fontSize": "6vmin"}}/>
                    Мои объявления
                </div>
                <div className={"main-frame-nav-item"}
                     onClick={() => this.onItemClicked(favoriteAnnouncementView)}>
                    <i className={"pi pi-heart"} style={{"fontSize": "6vmin"}}/>
                    Избранное
                </div>
                <div className={"main-frame-nav-item"}
                     onClick={() => this.onItemClicked(conversationsView)}>
                    <i className={"pi pi-envelope"} style={{"fontSize": "6vmin"}}/>
                    Сообщения
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-users"} style={{"fontSize": "6vmin"}}/>
                    Мои игры
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-id-card"} style={{"fontSize": "6vmin"}}/>
                    Кабинет
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-ticket"} style={{"fontSize": "6vmin"}}/>
                    Квесты
                </div>
                <div className={"main-frame-nav-item"}>
                    <i className={"pi pi-apple"} style={{"fontSize": "6vmin"}}/>
                    Панель администратора
                </div>
            </div>
        )
    }
}

const AppMenu = connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);

export default AppMenu