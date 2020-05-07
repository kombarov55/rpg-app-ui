import React from "react";
import {connect} from "react-redux";
import {InputTextarea} from "primereact/inputtextarea";
import Btn from "../../Common/Btn";
import {changeView, setActiveNetwork, updateNetworkForm} from "../../../data-layer/ActionCreators";
import {post} from "../../../util/Http";
import {networkUrl} from "../../../util/Parameters";
import {networkSelectionView} from "../../../Views";

function mapStateToProps(state, props) {
    return {
        networkForm: state.networkForm
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        updateNetworkForm: fieldNameToValue => dispatch(updateNetworkForm(fieldNameToValue)),
        changeView: view => dispatch(changeView(view))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    function save() {
        post(networkUrl, props.networkForm, rs => {
            updateNetworkForm({title: "", description: ""})
            props.changeView(networkSelectionView)
        })
    }

    return (
        <div className={"network-creation-view"}>
            <div className={"network-creation-view-label"}>Название: </div>
            <input className={"network-creation-view-input"}
                   value={props.networkForm.title}
                   onChange={e => props.updateNetworkForm({title: e.target.value})}
            />

            <div className={"network-creation-view-label"}>Картинка: </div>
            <input type={"file"} />

            <div className={"network-creation-view-label"}>Описание:</div>
            <InputTextarea autoResize={true}
                           rows={10}
                           value={props.networkForm.description}
                           onChange={e => props.updateNetworkForm({description: e.target.value})}
            />
            <div className={"network-creation-save-button"}
                 onClick={() => save()}>
                Сохранить
            </div>
        </div>
    )
})