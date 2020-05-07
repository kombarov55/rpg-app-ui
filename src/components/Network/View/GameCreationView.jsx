import React from "react";
import {connect} from "react-redux";
import {InputTextarea} from "primereact/inputtextarea";
import {changeView, updateGameForm} from "../../../data-layer/ActionCreators";
import {post} from "../../../util/Http";
import {saveGameUrl} from "../../../util/Parameters";
import {networkView} from "../../../Views";

function mapStateToProps(state, props) {
    return {
        gameForm: state.gameForm
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        updateGameForm: fieldNameToValue => dispatch(updateGameForm(fieldNameToValue)),
        changeView: view => dispatch(changeView(view))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    function save() {
        post(saveGameUrl, props.gameForm, rs => {
            props.updateGameForm({title: "", description: ""})
            props.changeView(networkView)
        })
    }

    return (
        <div className={"game-creation-view"}>
            <div className={"game-creation-view-label"}>Название: </div>
            <input className={"game-creation-view-input"}
                   value={props.gameForm.title}
                   onChange={e => props.updateGameForm({title: e.target.value})}
            />

            <div className={"game-creation-view-label"}>Картинка: </div>
            <input type={"file"} />

            <div className={"game-creation-view-label"}>Описание:</div>
            <InputTextarea autoResize={true}
                           rows={10}
                           value={props.gameForm.description}
                           onChange={e => props.updateGameForm({description: e.target.value})}
            />
            <div className={"game-creation-save-button"}
                 onClick={() => save()}>
                Сохранить
            </div>
        </div>
    )
})