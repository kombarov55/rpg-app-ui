import React from "react";
import {connect} from "react-redux";
import QuestionnaireItemForm from "../QuestionnaireItemForm";
import QuestionnaireItem from "../QuestionnaireItem";

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    return (
        <div className={"questionnaire-creation-view"}>
            <QuestionnaireItem name={"Страна"}
                               type={"Значение из списка"}
                               listValues={["Москва", "Тула", "Воронеж", "Ростов"]}
            />
        </div>
    )
})