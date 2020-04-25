import React from "react"

import {changeView, toggleSidebar} from "../data-layer/ActionCreators";
import {connect} from "react-redux";
import AppMenu from "./AppMenu";
import {Sidebar} from "primereact/sidebar";

function mapStateToProps(state) {
    return {
        currentView: state.currentView,
        sidebarVisible: state.sidebarVisible
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeView: (nextView) => dispatch(changeView(nextView)),
        toggleSidebar: () => dispatch(toggleSidebar())
    }
}

const urlSearchParams = new URLSearchParams(window.location.search);
const userId = urlSearchParams.get("user_id")
const vkUserId = urlSearchParams.get("vk_user_id")

class ConnectedMainFrame extends React.Component {

    render() {
        return (
            <div className={"main-vertical"}>
                <Sidebar style={{width: "80vw", background: "#592E83"}} visible={this.props.sidebarVisible} onHide={() => this.props.toggleSidebar()}>
                    <AppMenu/>
                </Sidebar>

                <div className={"main-frame-header"}>
                    <i className={"pi pi-bars"} style={{"fontSize": "5vmax"}} onClick={() => this.props.toggleSidebar()}/>
                    <div className={"head-name"}>
                        {/*{this.props.currentView.label}*/}
                        {
                            "userId: " + userId + ", vkUserId: " + vkUserId
                        }
                    </div>
                    <div className={"head-logo"}>Лого</div>
                </div>
                <div className={"main-frame-body"}>
                    <div className={"main-frame-view"}>
                        {this.props.currentView.component}
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