import React from "react";
import {connect} from "react-redux";
import {changeView} from "../../../data-layer/ActionCreators";
import {conversationListView} from "../../../Views";

function mapStateToProps(state, props) {
    return {

    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        onBackClicked: () => dispatch(changeView(conversationListView))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (function(props) {
    return (
        <div className={"conversation-view-header"}>
            <i className={"pi pi-arrow-left"}
               style={{"fontSize": "3vh", "margin": "0 5vw 0 3vw"}}
               onClick={() => props.onBackClicked()}
            />
            <img className={"conversation-view-companion-img"}
                 src={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}
            />
            <div className={"conversation-view-companion-fullname"}>Николай Комбаров</div>
        </div>
    )
})