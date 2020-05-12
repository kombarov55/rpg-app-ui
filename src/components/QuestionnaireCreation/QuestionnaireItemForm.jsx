import React from "react";
import {connect} from "react-redux";
import {SelectButton} from "primereact/selectbutton";
import QuestionnaireInputList from "./QuestionnaireInputList";
import Btn from "../Common/Btn";
import {updateQuestionnaireItemForm} from "../../data-layer/ActionCreators";
import ListInput from "../Common/ListInput";

function mapStateToProps(state, props) {
    return {
        questionnaireItemForm: state.questionnaireItemForm
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        updateQuestionnaireItemForm: fieldNameToValue => dispatch(updateQuestionnaireItemForm(fieldNameToValue))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    function onAddListItemClicked(value) {
        if (value !== "") {
            props.updateQuestionnaireItemForm({
                listValues: props.questionnaireItemForm.listValues.filter(it => it !== value).concat(value),
                listInput: ""
            })
        }
    }

    function onDeleteListItemClicked(value) {
        props.updateQuestionnaireItemForm({
            listValues: props.questionnaireItemForm.listValues.filter(it => it !== value),
        })
    }

    function onSaveClicked() {
        console.log(props.questionnaireItemForm)
    }

    return (
        <div className={"questionnaire-creation-item-form"}>
            <div className={"questionnaire-creation-item-form-label"}>Название пункта:</div>
            <input className={"questionnaire-item-name-input"}
                   value={props.questionnaireItemForm.name}
                   onChange={e => props.updateQuestionnaireItemForm({name: e.target.value})}
            />

            <div className={"questionnaire-creation-item-form-label"}>Тип:</div>
            <SelectButton value={props.questionnaireItemForm.type}
                          onChange={e => props.updateQuestionnaireItemForm({type: e.target.value})}
                options={[
                {label: "Текстовое", value: "string"},
                {label: "Числовое", value: "numeric"},
                {label: "Графическое ", value: "graphic"},
                {label: "Выбор из списка", value: "list"}
            ]}/>
            <div className={"questionnaire-creation-item-form-label"}>Элемент списка:</div>
            { props.questionnaireItemForm.type === "list" &&
                <ListInput
                    value={props.questionnaireItemForm.listInput}
                    onChange={e => props.updateQuestionnaireItemForm({listInput: e.target.value})}
                    onSubmit={value => onAddListItemClicked(value)}
                    onDelete={value => onDeleteListItemClicked(value)}
                    values={props.questionnaireItemForm.listValues}
                />
            }


            {/*<div className={"questionnaire-input-horizontal"}>*/}
            {/*    <input className={"questionnaire-item-list-input"}*/}
            {/*           */}
            {/*           */}
            {/*    <i className={"pi pi-plus-circle"}*/}
            {/*       style={{"fontSize": "5vmax"}}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<QuestionnaireInputList/>*/}

            <div className={"questionnaire-creation-item-form-disclaimer"}>
                <div className={"questionnaire-creation-item-form-disclaimer-text"}>
                    Будьте внимательны! Это отобразится в листе персонажа
                </div>
                <i className={"pi pi-exclamation-circle"}
                   style={{"fontSize": "5vmax"}}/>
            </div>
            <div className={"mobile-button save-questionnaire-button"}
                 onClick={() => onSaveClicked()}>
                Сохранить
            </div>
        </div>
    )
})