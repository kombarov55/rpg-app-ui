import React from "react"

import {changeView} from "../data-layer/ActionCreators";
import {connect} from "react-redux";
import AppMenu from "./AppMenu";
import {Sidebar} from "primereact/sidebar";

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

    state = {
        sidebarVisible: false
    }

    render() {
        return (
            <div className={"main-vertical"}>
                <Sidebar style={{width: "80vw", background: "#592E83"}} visible={this.state.sidebarVisible} onHide={() => this.setState({sidebarVisible: false})}>
                    <AppMenu/>
                </Sidebar>

                <div className={"main-frame-header"}>
                    <i className={"pi pi-bars"} style={{"fontSize": "5vmax"}} onClick={() => this.setState({sidebarVisible: true})}></i>
                    <div className={"head-name"}>Название</div>
                    <div className={"head-logo"}>Логотип</div>
                </div>
                <div className={"main-frame-body"}>
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