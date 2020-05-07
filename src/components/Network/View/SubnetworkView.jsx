import React, {useEffect} from "react";
import {connect} from "react-redux";
import GameItem from "../GameItem";
import {changeView} from "../../../data-layer/ActionCreators";
import {gameView} from "../../../Views";

function mapStateToProps(state, props) {
    return {
        activeSubnetwork: state.activeSubnetwork
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        changeViewToGame: () => dispatch(changeView(gameView))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return (
        <div className={"network-selection-view"}>
            <div className={"network-info"}>
                <img className={"network-info-img"}
                     src={props.activeSubnetwork.imgSrc}
                />
                <div className={"network-name"}>{props.activeSubnetwork.title}</div>
                <div className={"network-description"}>{props.activeSubnetwork.description}</div>
            </div>

            <div className={"games-label"}>
                Игры:
            </div>
            <div className={"games-view-horizontal"}>
                <GameItem onClick={() => props.changeViewToGame()}
                          imgSrc={"https://sun9-64.userapi.com/c858416/v858416297/1c6f50/HpIP0jOcov4.jpg"}
                          title={"Звёздные Войны ❖ Ролевая Игра ❖ Star Wars"}
                />
                <GameItem onClick={() => props.changeViewToGame()}
                          imgSrc={"https://sun9-50.userapi.com/c206728/v206728029/e6b05/y0oZUh43Mp4.jpg"}
                          title={"Гарри Поттер ❖ Ролевая игра ❖ Harry Potter"}
                />
                <GameItem onClick={() => props.changeViewToGame()}
                          imgSrc={"https://sun9-47.userapi.com/c206628/v206628029/e92bc/tiooZwDgav0.jpg"}
                          title={"Шерлок ❖ Ролевая Игра ❖ Sherlock"}
                />
                <GameItem onClick={() => props.changeViewToGame()}
                          imgSrc={"https://sun9-47.userapi.com/c206628/v206628029/e92bc/tiooZwDgav0.jpg"}
                          title={"Шерлок ❖ Ролевая Игра ❖ Sherlock"}
                />
                <GameItem onClick={() => props.changeViewToGame()}
                          imgSrc={"https://sun9-27.userapi.com/c857420/v857420029/1d203f/tKLlbcriafc.jpg"}
                          title={"Ривердейл ❖ Ролевая Игра ❖ Сабрина"}
                />
            </div>
        </div>
    )
})