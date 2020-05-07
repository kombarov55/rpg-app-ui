import React from "react";
import {connect} from "react-redux";
import {InputTextarea} from "primereact/inputtextarea";
import {updateSubnetworkForm} from "../../../data-layer/ActionCreators";

function mapStateToProps(state, props) {
    return {
        subnetworkForm: state.subnetworkForm
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        updateSubnetworkForm: fieldNameToValue => dispatch(updateSubnetworkForm(fieldNameToValue))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    function save() {
        alert("save")
    }

    return (
        <div className={"subnetwork-creation-view"}>
            <div className={"subnetwork-creation-view-label"}>Название: </div>
            <input className={"subnetwork-creation-view-input"}
                   value={props.subnetworkForm.title}
                   onChange={e => props.updateSubnetworkForm({title: e.target.value})}
            />

            <div className={"subnetwork-creation-view-label"}>Картинка: </div>
            <input type={"file"} />

            <div className={"subnetwork-creation-view-label"}>Описание:</div>
            <InputTextarea autoResize={true}
                           rows={10}
                           value={props.subnetworkForm.description}
                           onChange={e => props.updateSubnetworkForm({description: e.target.value})}
            />
            <div className={"subnetwork-creation-save-button"}
                 onClick={() => save()}>
                Сохранить
            </div>
        </div>
    )
})