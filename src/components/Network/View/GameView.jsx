import React from "react";
import {connect} from "react-redux";
import {changeView} from "../../../data-layer/ActionCreators";
import {questionnaireCreationView, questionnaireRulesView} from "../../../Views";

function mapStateToProps(state, props) {
    return {
        activeGame: state.activeGame
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        changeView: (view) => dispatch(changeView(view))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return (
        <div className={"game-view"}>
            <div className={"game-info"}>
                <img className={"game-info-img"}
                     src={props.activeGame.imgSrc}
                />
                <div className={"game-name"}>{props.activeGame.title}</div>
                <div className={"game-description"}>{props.activeGame.description}
                </div>
                <div className={"mobile-button"}>Присоединиться к игре</div>
                <div className={"mobile-button"}
                     onClick={() => props.changeView(questionnaireRulesView)}>
                    Создать шаблон анкеты
                </div>
            </div>
        </div>
    )
})