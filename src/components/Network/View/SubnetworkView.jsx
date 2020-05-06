import React from "react";
import {connect} from "react-redux";
import GameItem from "../GameItem";

function mapStateToProps(state, props) {
    return {
    
    }
}

function mapDispatchToProps(state, props) {
    return {
    
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return (
        <div className={"network-selection-view"}>
            <div className={"network-info"}>
                <img className={"network-info-img"}
                     src={"https://sun9-43.userapi.com/c855132/v855132195/1b06e2/3otc23chxQw.jpg"}
                />
                <div className={"network-name"}>❖ ASIADREAMS ❖</div>
                <div className={"network-description"}>
                    Здравствуй, дорогой друг.
                    Я немного объясню, что мы такое.
                    Нам не важно, где ты работал раньше или работаешь сейчас. Здесь тебя примут вне зависимости от места жительства, семейного положения, ориентации, веры или расы. Здесь мы стараемся дать то, в поисках чего так часто люди блуждают в сети.
                    Это — твой дом.
                </div>
            </div>

            <div className={"games-label"}>
                Игры:
            </div>
            <div className={"games-view-horizontal"}>
                <GameItem imgSrc={"https://sun9-64.userapi.com/c858416/v858416297/1c6f50/HpIP0jOcov4.jpg"}
                          title={"Звёздные Войны ❖ Ролевая Игра ❖ Star Wars"}
                />
                <GameItem imgSrc={"https://sun9-50.userapi.com/c206728/v206728029/e6b05/y0oZUh43Mp4.jpg"}
                          title={"Гарри Поттер ❖ Ролевая игра ❖ Harry Potter"}
                />
                <GameItem imgSrc={"https://sun9-47.userapi.com/c206628/v206628029/e92bc/tiooZwDgav0.jpg"}
                          title={"Шерлок ❖ Ролевая Игра ❖ Sherlock"}
                />
                <GameItem imgSrc={"https://sun9-47.userapi.com/c206628/v206628029/e92bc/tiooZwDgav0.jpg"}
                          title={"Шерлок ❖ Ролевая Игра ❖ Sherlock"}
                />
                <GameItem imgSrc={"https://sun9-27.userapi.com/c857420/v857420029/1d203f/tKLlbcriafc.jpg"}
                          title={"Ривердейл ❖ Ролевая Игра ❖ Сабрина"}
                />
            </div>
        </div>
    )
})