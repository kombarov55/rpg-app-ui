import React, {useEffect} from "react";
import {connect} from "react-redux";
import GameItem from "../GameItem";
import {changeView} from "../../../data-layer/ActionCreators";
import {gameCreationView, gameView} from "../../../Views";
import AddGameItem from "../AddGameItem";
import Globals from "../../../util/Globals";

function mapStateToProps(state, props) {
    return {
        activeSubnetwork: state.activeSubnetwork,
        games: state.games
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        changeView: view => dispatch(changeView(view))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    function onGameClicked(game) {
        props.changeView(gameView)
    }

    function onAddGameClicked() {
        Globals.creatingGameByNetwork = false
        props.changeView(gameCreationView)
    }

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
                {
                    props.games.map(game =>
                        <GameItem
                            key={game.id}
                            imgSrc={game.imgSrc}
                            title={game.title}
                            onClick={() => onGameClicked(game)}
                        />)
                }
                <AddGameItem
                    onClick={() => onAddGameClicked()}
                />
            </div>
        </div>
    )
})