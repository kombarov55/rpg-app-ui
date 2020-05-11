import React from "react";
import {connect} from "react-redux";
import {InputTextarea} from "primereact/inputtextarea";
import {changeView, setActiveGame, setGames, updateGameForm} from "../../../data-layer/ActionCreators";
import {put} from "../../../util/Http";
import {editGameByNetworkId, editGamebySubnetworkId} from "../../../util/Parameters";
import {gameView} from "../../../Views";
import Globals from "../../../util/Globals";

function mapStateToProps(state, props) {
    return {
        gameForm: state.gameForm,
        activeNetwork: state.activeNetwork,
        activeSubnetwork: state.activeSubnetwork,
        games: state.games,
        growl: state.growl
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        updateGameForm: fieldNameToValue => dispatch(updateGameForm(fieldNameToValue)),
        changeView: view => dispatch(changeView(view)),
        setGames: games => dispatch(setGames(games)),
        setActiveGame: game => dispatch(setActiveGame(game))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    function save() {
        const url = props.activeNetwork.networkId ?
            editGameByNetworkId(props.activeNetwork.id) :
            editGamebySubnetworkId(props.activeNetwork.id, props.activeSubnetwork.id);

        put(url, props.gameForm, rs => {
            props.growl.show({severity: "info", summary: "Игра обновлена"})
            props.setGames(props.games.filter(it => it.id !== rs.id).concat(rs))
            props.setActiveGame(rs)
            props.changeView(gameView)
        })
    }

    return (
        <div className={"game-creation-view"}>
            <div className={"game-creation-view-label"}>Название:</div>
            <input className={"game-creation-view-input"}
                   value={props.gameForm.title}
                   onChange={e => props.updateGameForm({title: e.target.value})}
            />

            <div className={"game-creation-view-label"}>Картинка:</div>
            <input type={"file"}/>

            <div className={"game-creation-view-label"}>Описание:</div>
            <InputTextarea autoResize={true}
                           rows={10}
                           value={props.gameForm.description}
                           onChange={e => props.updateGameForm({description: e.target.value})}
            />
            <div className={"game-creation-save-button"}
                 onClick={() => save()}>
                Сохранить
            </div>
        </div>
    )
})