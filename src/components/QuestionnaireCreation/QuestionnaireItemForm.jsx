import React from "react";
import {connect} from "react-redux";
import {SelectButton} from "primereact/selectbutton";
import QuestionnaireInputList from "./QuestionnaireInputList";
import Btn from "../Common/Btn";

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return (
        <div className={"questionnaire-creation-item-form"}>
            <div className={"questionnaire-creation-item-form-label"}>Название пункта:</div>
            <input className={"questionnaire-item-name-input"}/>

            <div className={"questionnaire-creation-item-form-label"}>Тип:</div>
            <SelectButton options={[
                {label: "Текстовое", value: "string"},
                {label: "Числовое", value: "numeric"},
                {label: "Графическое ", value: "graphic"},
                {label: "Выбор из списка", value: "list"}
            ]}/>
            <div className={"questionnaire-creation-item-form-label"}>Элемент списка:</div>
            <div className={"questionnaire-input-horizontal"}>
                <input className={"questionnaire-item-list-input"}/>
                <i className={"pi pi-plus-circle"}
                   style={{"fontSize": "5vmax"}}
                />
            </div>
            <QuestionnaireInputList/>

            <div className={"questionnaire-creation-item-form-disclaimer"}>
                <div className={"questionnaire-creation-item-form-disclaimer-text"}>
                    Будьте внимательны! Это отобразится в листе персонажа
                </div>
                <i className={"pi pi-exclamation-circle"}
                   style={{"fontSize": "5vmax"}}/>
            </div>
            <div className={"mobile-button save-questionnaire-button"}>
                Сохранить
            </div>
        </div>
    )
})