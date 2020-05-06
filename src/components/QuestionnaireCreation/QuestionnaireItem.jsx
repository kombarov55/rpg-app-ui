import React from "react";
import {connect} from "react-redux";

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return (
        <div class={"questionnaire-item"}>
            <div className={"questionnaire-item-head-horizontal"}>
                <div className={"questionnaire-item-name"}>{props.name}</div>
                <div className={"questionnaire-item-type"}>{props.type}</div>
            </div>
            {props.listValues != null &&
            props.listValues.map(name => <div className={"questionnaire-item-list-item-display"}>{name}</div>)
            }
        </div>
    )
})