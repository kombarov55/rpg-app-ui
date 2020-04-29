import React from "react";
import {useForm} from "react-hook-form";
import {updateCommentForm} from "../../../data-layer/ActionCreators";
import {connect} from "react-redux";

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
            <textarea
                name={"commentText"}
                value={props.commentForm.text}
                ref={register({required: true})}
                onChange={(e) => props.updateCommentForm({text: e.target.value})}
            />
            {errors.commentText && "Введите текст комментария"}
            <input type={"submit"}/>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedCommentsCreationForm)