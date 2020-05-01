import React from "react";
import {connect} from "react-redux";

function mapStateToProps(state, props) {

}

function mapDispatchToProps(dispatch, props) {

}

function ConversationView(props) {
    return (
        <div className={"dialog-view"}>
            HEllo world
            <div className={"dialog-view-header"}>
                <i className={"pi pi-arrow-left"}/>
            </div>
            <div className={"dialog-view-msg-list"}>

            </div>
            <div className={"dialog-view-input"}>

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView)