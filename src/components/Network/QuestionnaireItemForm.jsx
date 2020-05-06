import React from "react";
import {connect} from "react-redux";
import {SelectButton} from "primereact/selectbutton";
import QuestionnaireInputList from "./QuestionnaireInputList";

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
        <div className={"questionnaire-creation-item-form"}>
            <input className={"questionnaire-item-name-input"}
                   placeholder={"Название пункта"}/>
            <SelectButton options={[
                {label: "Текстовое", value: "string"},
                {label: "Числовое", value: "numeric"},
                {label: "Графическое ", value: "graphic"},
                {label: "Выбор из списка", value: "list"}
            ]}/>
            <div className={"questionnaire-input-horizontal"}>
                <input className={"questionnaire-item-list-input"}
                       placeholder={"Элемент списка"}/>
                <i className={"pi pi-plus-circle"}
                   style={{"fontSize": "5vmax"}}
                />
            </div>
            <QuestionnaireInputList/>
        </div>
    )
})