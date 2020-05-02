import React from "react";
import {connect} from "react-redux";
import ConversationMessage from "../ConversationMessage";
import {get} from "../../../util/Http";
import {getMsgsUrl, msgLongpollUrl} from "../../../util/Parameters";
import {addMsgs, setMsgs} from "../../../data-layer/ActionCreators";
import Globals from "../../../util/Globals";
import Longpoll from "../../../util/Longpoll";

function mapStateToProps(state, props) {
    return {
        conversationId: state.activeConversation.id,
        msgs: state.msgs
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        setMsgsToStore: msgs => dispatch(setMsgs(msgs)),
        addMsgs: msgs => dispatch(addMsgs(msgs))
    }
}

function ConversationView(props) {
    function getLastMsgDate() {
        const lastMsg = props.msgs[0]
        if (lastMsg == null) {
            return new Date().getTime()
        } else {
            return lastMsg.creationDate
        }
    }

    React.useEffect(() => {
        get(getMsgsUrl(props.conversationId, 0, 25), rs => {
            props.setMsgsToStore(rs)
            Longpoll(() => msgLongpollUrl(props.conversationId, getLastMsgDate(), Globals.userId), (text) => {
                const msgs = JSON.parse(text)
                props.addMsgs(msgs)
            }).start()
        })
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