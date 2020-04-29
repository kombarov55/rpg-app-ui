import React from "react";
import CommentsCreationForm from "./CommentsCreationForm";
import Comment from "./Comment";

class CommentSection extends React.Component {
    render() {
        return (
            <div className={"comment-section"}>
                <Comment
                    id={"1"}
                    authorImgSrc={"https://sun9-41.userapi.com/c850436/v850436953/9d901/_AF7xArtAcg.jpg"}
                    authorFullName={"Николай Комбаров"}
                    creationDate={new Date().toUTCString()}
                    text={"Что то там про объявление. Очень очень длинное сообщение. оно должно быть длинным чтобы я мог увидеть как текст распределяется по контейнеру"}
                />
                <Comment
                    id={"1"}
                    authorImgSrc={"https://sun9-41.userapi.com/c850436/v850436953/9d901/_AF7xArtAcg.jpg"}
                    authorFullName={"Николай Комбаров"}
                    creationDate={new Date().toUTCString()}
                    text={"Бла бла бла "}
                />
                <Comment
                    id={"1"}
                    authorImgSrc={"https://sun9-41.userapi.com/c850436/v850436953/9d901/_AF7xArtAcg.jpg"}
                    authorFullName={"Николай Комбаров"}
                    creationDate={new Date().toUTCString()}
                    text={"Бла бла бла "}
                />
                <CommentsCreationForm announcementId={this.props.announcementId} />
            </div>
        )
    }
}

export default CommentSection