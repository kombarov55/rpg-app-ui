import React from "react";
import {useForm} from "react-hook-form";
import {updateCommentForm} from "../../../data-layer/ActionCreators";
import {connect} from "react-redux";
import ConvertUnicode from "../../../util/ConvertUnicode";

function mapStateToProps(state) {
    return {
        commentForm: state.commentForm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCommentForm: (fieldNameToValue) => dispatch(updateCommentForm(fieldNameToValue))
    }
}

function ConnectedCommentsCreationForm(props) {
    const {handleSubmit, register, errors} = useForm()

    function onSubmit() {
        console.log(props.commentForm)
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