import React from "react";
import {connect} from "react-redux";
import {changeView} from "../../../data-layer/ActionCreators";
import {questionnaireCreationView} from "../../../Views";

function mapStateToProps(state, props) {
    return {}
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
                     src={"https://sun9-64.userapi.com/c858416/v858416297/1c6f50/HpIP0jOcov4.jpg"}
                />
                <div className={"game-name"}>Звёздные Войны ❖ Ролевая Игра ❖ Star Wars</div>
                <div className={"game-description"}>
                </div>
                <div className={"game-join-button"}>Присоединиться к игре</div>
                <div className={"game-join-button"}
                     onClick={() => props.changeView(questionnaireCreationView)}>
                    Создать шаблон анкеты</div>
            </div>
        </div>
    )
})