import React from "react";
import {connect} from "react-redux";
import ConversationMessage from "../ConversationMessage";
import {get} from "../../../util/Http";
import {getMsgsUrl} from "../../../util/Parameters";
import {setMsgs} from "../../../data-layer/ActionCreators";

function mapStateToProps(state, props) {
    return {
        activeConversation: state.activeConversation
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        setMsgsToStore: msgs => dispatch(setMsgs(msgs))
    }
}

function ConversationView(props) {
    React.useEffect(() => {
        get(getMsgsUrl(props.activeConversation.id, 0, 25))
            .then(rs => props.setMsgsToStore(rs))
    }, [])

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