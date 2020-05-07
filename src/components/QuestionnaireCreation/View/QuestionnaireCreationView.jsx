import React from "react";
import {connect} from "react-redux";
import QuestionnaireItemForm from "../QuestionnaireItemForm";
import QuestionnaireAddItemButton from "../QuestionnaireAddItemButton";
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
            {/*<QuestionnaireItemForm/>*/}
            <QuestionnaireItem name={"Имя персонажа"}
                               type={"Текстовое"}
            />
            <QuestionnaireItem name={"Мин. возраст персонажа"}
                               type={"Текстовое"}
            />

            <QuestionnaireItem name={"Город"}
                               type={"Выбор из списка"}
                               listValues={["Москва", "Тула", "Воронеж", "Ростов"]}
            />

            <QuestionnaireItemForm/>

            <QuestionnaireAddItemButton/>


        {/*<SkillItemForm/>*/}
        {/*    <SkillItem*/}
        {/*        name={"Сила"}*/}
        {/*        type={"Общий"}*/}
        {/*        imgSrc={"https://i.pinimg.com/originals/bb/6f/06/bb6f0636acac89991930340e6c4f91d2.jpg"}*/}
        {/*        description={"Strength is one of the three primary attributes with the theme of defending against magic damage. It grants health and health regeneration to every hero. Strength heroes also gain attack damage per point of strength."}*/}
        {/*    />*/}
        </div>
    )
})