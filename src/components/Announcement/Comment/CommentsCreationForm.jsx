import React from "react";
import {useForm} from "react-hook-form";
import {incAnnouncementField, updateCommentForm} from "../../../data-layer/ActionCreators";
import {connect} from "react-redux";
import ConvertUnicode from "../../../util/ConvertUnicode";
import {post} from "../../../util/Http";
import {commentUrl, rootUrl} from "../../../util/Parameters";
import Globals from "../../../util/Globals";

function mapStateToProps(state) {
    return {
        commentForm: state.commentForm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCommentForm: (fieldNameToValue) => dispatch(updateCommentForm(fieldNameToValue)),
        incCommentsCount: (announcementId) => dispatch(incAnnouncementField(announcementId, "commentsCount"))
    }
}

function ConnectedCommentsCreationForm(props) {
    const {handleSubmit, register, errors} = useForm()

    function onSubmit() {
        const rs = post(commentUrl, JSON.stringify({
            authorId: Globals.userId,
            announcementId: props.announcementId,
            text: props.commentForm.text
        }))
        props.updateCommentForm({text: ""})
        props.incCommentsCount(props.announcementId)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"comment-creation-form"}>
                <textarea
                    rows={2}
                    className={"comment-creation-form-textarea"}
                    placeholder={"Текст комментария.."}
                    name={"commentText"}
                    value={props.commentForm.text}
                    ref={register({required: true})}
                    onChange={(e) => props.updateCommentForm({text: e.target.value})}
                />
                <input
                    className={"comment-creation-form-submit"}
                    type={"submit"}
                    value={ConvertUnicode("\u27A4")}
                />
            </div>
            {errors.commentText &&
                <div className={"comment-creation-form-text-error"}>
                    Введите текст комментария
                </div>
            }
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedCommentsCreationForm)