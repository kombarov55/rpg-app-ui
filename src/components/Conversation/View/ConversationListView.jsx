import React from "react";
import ConversationItem from "../ConversationItem";
import {connect} from "react-redux";
import {changeView} from "../../../data-layer/ActionCreators";
import {conversationView} from "../../../Views";

function mapStateToProps(state, props) {
    return {
        conversations: state.conversations
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        changeViewToConversation: companionUserId => dispatch(changeView(conversationView))
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
                        onClick={() => props.changeViewToConversation("TODO")}
                    />
                ))
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationListView)