import React from "react"

import {announcementView, announcementCreationView} from "../View";
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

class ConnectedMainFrame extends React.Component {

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
                        <div className={"main-frame-nav-item"} onClick={() => this.props.changeView(announcementView)}>Доска объявлений</div>
                        <div className={"main-frame-nav-item"} onClick={() => this.props.changeView(announcementCreationView)}>Мои объявления</div>
                        <div className={"main-frame-nav-item"}>Избранное</div>
                        <div className={"main-frame-nav-item"}>Сообщения</div>
                        <div className={"main-frame-nav-item"}>Мои игры</div>
                        <div className={"main-frame-nav-item"}>Кабинет</div>
                        <div className={"main-frame-nav-item"}>Квесты</div>
                        <div className={"main-frame-nav-item"}>Панель администратора</div>
                    </div>
                    <div className={"main-frame-view"}>
                        <span className={"main-frame-view-title"}>Доска объявлений</span>

                        {this.props.currentView}
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

const MainFrame = connect(mapStateToProps, mapDispatchToProps)(ConnectedMainFrame)

export default MainFrame