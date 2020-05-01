import React from "react";
import ConversationItem from "../ConversationItem";
import FormatDate from "../../../util/FormatDate";
import {connect} from "react-redux";
import {get} from "../../../util/Http";
import {conversationUrl} from "../../../util/Parameters";
import Globals from "../../../util/Globals";
import {addConversation} from "../../../data-layer/ActionCreators";

function mapStateToProps(state, props) {
    return {
        conversations: state.conversations
    }
}

function mapDispatchToProps(dispatch, props) {
    return {

    }
}

function ConversationsView(props) {
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

            {/*<ConversationItem*/}
            {/*    companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}*/}
            {/*    companionFullName={"Николай Комбаров"}*/}
            {/*    msgDateFormatted={FormatDate(new Date())}*/}
            {/*    text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}*/}
            {/*/>*/}
            {/*<ConversationItem*/}
            {/*    companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}*/}
            {/*    companionFullName={"Николай Комбаров"}*/}
            {/*    msgDateFormatted={FormatDate(new Date())}*/}
            {/*    text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}*/}
            {/*/>*/}
            {/*<ConversationItem*/}
            {/*    companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}*/}
            {/*    companionFullName={"Николай Комбаров"}*/}
            {/*    msgDateFormatted={FormatDate(new Date())}*/}
            {/*    text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}*/}
            {/*/>*/}
            {/*<ConversationItem*/}
            {/*    companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}*/}
            {/*    companionFullName={"Николай Комбаров"}*/}
            {/*    msgDateFormatted={FormatDate(new Date())}*/}
            {/*    text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}*/}
            {/*/>*/}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsView)