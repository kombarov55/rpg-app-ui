import React from "react";
import {connect} from "react-redux";
import ConversationMessage from "../ConversationMessage";
import {get} from "../../../util/Http";
import {getMsgsUrl} from "../../../util/Parameters";
import {setMsgs} from "../../../data-layer/ActionCreators";
import Globals from "../../../util/Globals";

function mapStateToProps(state, props) {
    return {
        activeConversation: state.activeConversation,
        msgs: state.msgs
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
                {
                    props.msgs.map(message => (
                        <ConversationMessage
                            key={message.id}
                            mine={message.authorUserId == Globals.userId}
                            imgSrc={message.authorImgSrc}
                            text={message.text}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationView)