import React from "react";
import ConversationItem from "../ConversationItem";
import FormatDate from "../../../util/FormatDate";

function ConversationsView(props) {
    return (
        <div className={"conversations-view"}>
            <ConversationItem
                companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}
                companionFullName={"Николай Комбаров"}
                msgDateFormatted={FormatDate(new Date())}
                text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}
            />
            <ConversationItem
                companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}
                companionFullName={"Николай Комбаров"}
                msgDateFormatted={FormatDate(new Date())}
                text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}
            />
            <ConversationItem
                companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}
                companionFullName={"Николай Комбаров"}
                msgDateFormatted={FormatDate(new Date())}
                text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}
            />
            <ConversationItem
                companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}
                companionFullName={"Николай Комбаров"}
                msgDateFormatted={FormatDate(new Date())}
                text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}
            />
            <ConversationItem
                companionImgSrc={"https://sun9-39.userapi.com/c206624/v206624729/a57dc/HS1ds38r7rA.jpg?ava=1"}
                companionFullName={"Николай Комбаров"}
                msgDateFormatted={FormatDate(new Date())}
                text={"Как дела? но мне тут надо очень длинно написать чтобы понять что всё нормально грузится..."}
            />
        </div>
    )
}

export default ConversationsView