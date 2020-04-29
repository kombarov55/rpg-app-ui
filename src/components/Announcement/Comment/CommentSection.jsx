import React from "react";
import CommentsCreationForm from "./CommentsCreationForm";
import Comment from "./Comment";
import {connect} from "react-redux";
import RestoreComment from "./RestoreComment";

function mapStateToProps(state, props) {
    return {
        comments: state.comments.filter(comment => comment.announcementId === props.announcementId)
    }
}

class CommentSection extends React.Component {
    render() {
        return (
            <div className={"comment-section"}>

                <RestoreComment/>

                { this.props.comments !== undefined &&

                    this.props.comments.map(comment => (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        announcementId={comment.announcementId}
                        authorFullName={comment.authorFullName}
                        authorImgSrc={comment.authorImgSrc}
                        creationDate={comment.creationDate}
                        text={comment.text}
                    />
                ))}
                {/*<Comment*/}
                {/*    id={"1"}*/}
                {/*    authorImgSrc={"https://sun9-41.userapi.com/c850436/v850436953/9d901/_AF7xArtAcg.jpg"}*/}
                {/*    authorFullName={"Николай Комбаров"}*/}
                {/*    creationDate={new Date().toUTCString()}*/}
                {/*    text={"Что то там про объявление. Очень очень длинное сообщение. оно должно быть длинным чтобы я мог увидеть как текст распределяется по контейнеру"}*/}
                {/*/>*/}
                {/*<Comment*/}
                {/*    id={"1"}*/}
                {/*    authorImgSrc={"https://sun9-41.userapi.com/c850436/v850436953/9d901/_AF7xArtAcg.jpg"}*/}
                {/*    authorFullName={"Николай Комбаров"}*/}
                {/*    creationDate={new Date().toUTCString()}*/}
                {/*    text={"Бла бла бла "}*/}
                {/*/>*/}
                {/*<Comment*/}
                {/*    id={"1"}*/}
                {/*    authorImgSrc={"https://sun9-41.userapi.com/c850436/v850436953/9d901/_AF7xArtAcg.jpg"}*/}
                {/*    authorFullName={"Николай Комбаров"}*/}
                {/*    creationDate={new Date().toUTCString()}*/}
                {/*    text={"Бла бла бла "}*/}
                {/*/>*/}
                <CommentsCreationForm announcementId={this.props.announcementId} />
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(CommentSection)