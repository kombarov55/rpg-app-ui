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
    const {handleSubmit} = useForm()

    function onSubmit() {
        console.log(props.commentForm)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
                name={"comment-text"}
                value={props.commentForm.text}
                onChange={(e) => props.updateCommentForm({text: e.target.value})}
            />
            <input type={"submit"}/>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedCommentsCreationForm)