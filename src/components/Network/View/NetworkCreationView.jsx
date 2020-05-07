import React from "react";
import {connect} from "react-redux";
import {InputTextarea} from "primereact/inputtextarea";
import Btn from "../../Common/Btn";

function mapStateToProps(state, props) {
    return {
    
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
    
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return (
        <div className={"network-creation-view"}>
            <div className={"network-creation-view-label"}>Название: </div>
            <input className={"network-creation-view-input"}/>

            <div className={"network-creation-view-label"}>Картинка: </div>
            <input type={"file"} />

            <div className={"network-creation-view-label"}>Описание:</div>
            <InputTextarea autoResize={true}
                           rows={10}
            />
            <div className={"network-creation-save-button"}
                 onClick={() => props.onClick() == null ? alert("pass onClick() to props") : props.onClick()}>
                Сохранить
            </div>
        </div>
    )
})