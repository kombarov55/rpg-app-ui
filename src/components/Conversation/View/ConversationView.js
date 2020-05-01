import React from "react";
import {connect} from "react-redux";
import ConversationHeadView from "./ConversationHeadView";

function mapStateToProps(state, props) {

}

function mapDispatchToProps(dispatch, props) {

}

function ConversationView(props) {
    return (
        <div className={"conversation-view"}>
            {/*<div className={"conversation-view-header"}>*/}
            {/*    <i className={"pi pi-arrow-left"}*/}
            {/*       style={{"fontSize": "3vh", "margin": "0 5vw 0 3vw"}}*/}
            {/*    />*/}
            {/*    <img className={"conversation-view-companion-img"}*/}
            {/*         src={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}*/}
            {/*    />*/}
            {/*    <div className={"conversation-view-companion-fullname"}>Николай Комбаров</div>*/}
            {/*</div>*/}
            <div className={"conversation-view-msg-list"}>

            </div>
            <div className={"conversation-view-input"}>

            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView)