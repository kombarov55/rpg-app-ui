import React from "react";
import {connect} from "react-redux";

function mapStateToProps(state, props) {

}

function mapDispatchToProps(dispatch, props) {

}

function ConversationView(props) {
    return (
        <div className={"conversation-view"}>
            <div className={"conversation-view-msg-list"}>

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView)