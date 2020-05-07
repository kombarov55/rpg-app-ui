import React from "react";
import {connect} from "react-redux";
import {InputTextarea} from "primereact/inputtextarea";
import {changeView, setGames, updateGameForm} from "../../../data-layer/ActionCreators";
import {post} from "../../../util/Http";
import {gameByNetworkId, gameBySubnetworkId} from "../../../util/Parameters";
import {networkView, subnetworkView} from "../../../Views";
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
        setGames: games => dispatch(setGames(games))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    function save() {
        const url = Globals.creatingGameByNetwork ?
            gameByNetworkId(props.activeNetwork.id) :
            gameBySubnetworkId(props.activeNetwork.id, props.activeSubnetwork.id);

        post(url, props.gameForm, rs => {
            props.setGames(props.games.concat(rs))
            props.updateGameForm({title: "", description: ""})
            props.changeView(Globals.creatingGameByNetwork ? networkView : subnetworkView)
            props.growl.show({severity: "info", summary: "Игра создана"})
        })
    }

    return (
        <div className={"game-creation-view"}>
            <div className={"game-creation-view-label"}>Название: </div>
            <input className={"game-creation-view-input"}
                   value={props.gameForm.title}
                   onChange={e => props.updateGameForm({title: e.target.value})}
            />

            <div className={"game-creation-view-label"}>Картинка: </div>
            <input type={"file"} />

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