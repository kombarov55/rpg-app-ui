import React from "react";
import {connect} from "react-redux";
import {SelectButton} from "primereact/selectbutton";

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
        <div className={"questionnaire-creation-skill-item-form"}>
            <input className={"questionnaire-creation-skill-item-form-name-input"}
                   placeholder={"Название навыка.."}
            />
            <SelectButton options={["Общий", "Боевой", "Магический", "Прочий"]}
            />
            <div className={"questionnaire-creation-skill-item-form-img-selection-label"}>Картинка: </div>
            <div className={"questionnaire-creation-skill-item-form-img-selection"}>
                <img className={"questionnaire-creation-skill-item-form-img-selection-item"}
                     src={"https://gamepedia.cursecdn.com/dota2_gamepedia/7/7a/Strength_attribute_symbol.png?version=d8564cc61841b6a816a9b1e6fd528f91"}
                />
                <img className={"questionnaire-creation-skill-item-form-img-selection-item"}
                     src={"https://gamepedia.cursecdn.com/dota2_gamepedia/2/2d/Agility_attribute_symbol.png?version=0429997b8b5c7b8195a35f719ef1700a"}
                />
                <img className={"questionnaire-creation-skill-item-form-img-selection-item questionnaire-creation-skill-item-form-img-selection-item-selected"}
                     src={"https://gamepedia.cursecdn.com/dota2_gamepedia/5/56/Intelligence_attribute_symbol.png?version=7e30189be7a7c15889a2c245584797da"}
                />
            </div>


        </div>
    )
})