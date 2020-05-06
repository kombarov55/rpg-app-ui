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
        <div className={"game-view"}>
            <div className={"game-info"}>
                <img className={"game-info-img"}
                     src={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}
                />
                <div className={"game-name"}>❖ DREAMS ❖</div>
                <div className={"game-description"}>
                    Здравствуй, дорогой друг.
                    Я немного объясню, что мы такое.
                    Нам не важно, где ты работал раньше или работаешь сейчас. Здесь тебя примут вне зависимости от места
                    жительства, семейного положения, ориентации, веры или расы. Здесь мы стараемся дать то, в поисках
                    чего так часто люди блуждают в сети.
                    Это — твой дом.
                </div>
            </div>
        </div>
    )
})