import React from "react";
import {connect} from "react-redux";
import {SelectButton} from "primereact/selectbutton";
import AddQuestionnaireItemButton from "../AddQuestionnaireItemButton";
import {InputTextarea} from "primereact/inputtextarea";
import {InputText} from "primereact/inputtext";
import QuestionnaireItemForm from "../QuestionnaireItemForm";

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    return (
        <div className={"questionnaire-creation-view"}>
            <QuestionnaireItemForm/>
        </div>
    )
})