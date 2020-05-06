import React from "react";
import {connect} from "react-redux";

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
        <div className={"questionaire-skill-item"}>
            <div className={"questionaire-skill-item-horizontal"}>
                <img className={"questionnaire-skill-img"}
                     src={props.imgSrc}
                />
                <div className={"questionnaire-skill-item-vertical"}>
                    <div className={"questionnaire-skill-name"}>{props.name}</div>
                    <div className={"questionnaire-skill-type"}>{props.type}</div>
                </div>
            </div>


            <div className={"questionnaire-skill-description"}>{props.description}</div>


        </div>
    )
})