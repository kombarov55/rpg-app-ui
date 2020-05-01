import React from "react";
import {connect} from "react-redux";
import ConversationMessage from "../ConversationMessage";

function mapStateToProps(state, props) {

}

function mapDispatchToProps(dispatch, props) {

}

function ConversationView(props) {
    return (
        <div className={"conversation-view"}>
            <div className={"conversation-view-msg-list"}>
                <ConversationMessage
                    mine={true}
                    imgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}
                    text={"Как дела?"}
                />

                <ConversationMessage
                    mine={false}
                    imgSrc={"https://sun1-96.userapi.com/EOdc3_3GhgLW6wdlHH0J-stOWVDOp63uo-8O_Q/wDiUDw2OXBc.jpg?ava=1"}
                    text={"Прекрасно, твои как?"}
                />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView)