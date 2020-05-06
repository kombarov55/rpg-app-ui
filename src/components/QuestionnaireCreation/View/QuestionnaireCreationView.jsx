import React from "react";
import {connect} from "react-redux";
import QuestionnaireItemForm from "../QuestionnaireItemForm";
import QuestionnaireItem from "../QuestionnaireItem";
import SkillItem from "../SkillItem";
import SkillpointsDistributionForm from "../SkillpointsDistributionForm";
import SkillItemForm from "../SkillItemForm";

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    return (
        <div className={"questionnaire-creation-view"}>
        <SkillItemForm/>
            {/*<SkillItem*/}
            {/*    name={"Сила"}*/}
            {/*    type={"Общий"}*/}
            {/*    imgSrc={"https://i.pinimg.com/originals/bb/6f/06/bb6f0636acac89991930340e6c4f91d2.jpg"}*/}
            {/*    description={"Strength is one of the three primary attributes with the theme of defending against magic damage. It grants health and health regeneration to every hero. Strength heroes also gain attack damage per point of strength."}*/}
            {/*/>*/}
        </div>
    )
})