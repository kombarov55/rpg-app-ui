import React from "react";
import ConversationItem from "../ConversationItem";
import {connect} from "react-redux";

function mapStateToProps(state, props) {
    return {
        conversations: state.conversations
    }
}

function mapDispatchToProps(dispatch, props) {
    return {

    }
}

function ConversationListView(props) {
    return (
        <div className={"conversations-view"}>
            {
                props.conversations.map(conversation => (
                    <ConversationItem
                        key={conversation.id}
                        companionImgSrc={conversation.companionImgSrc}
                        companionFullName={conversation.companionFullName}
                        msgTimestamp={conversation.lastMsgDate}
                        text={conversation.lastMsgText}
                    />
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationListView)