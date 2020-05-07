import React, {useEffect} from "react";
import {connect} from "react-redux";
import NetworkItem from "../NetworkItem";
import {gameCreationView, gameView, subnetworkCreationView, subnetworkView} from "../../../Views";
import {
    changeView,
    setActiveGame,
    setActiveSubnetwork,
    setGames,
    setSubnetworks
} from "../../../data-layer/ActionCreators";
import AddSubnetworkItem from "../AddSubnetworkItem";
import AddGameItem from "../AddGameItem";
import Globals from "../../../util/Globals";
import GameItem from "../GameItem";
import {get} from "../../../util/Http";
import {gameBySubnetworkId} from "../../../util/Parameters";

function mapStateToProps(state, props) {
    return {
        activeNetwork: state.activeNetwork,
        subnetworks: state.subnetworks,
        games: state.games
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        changeView: view => dispatch(changeView(view)),
        setSubnetworks: subnetworks => dispatch(setSubnetworks(subnetworks)),
        setActiveSubnetwork: subnetwork => dispatch(setActiveSubnetwork(subnetwork)),
        setActiveGame: game => dispatch(setActiveGame(game)),
        setGames: games => dispatch(setGames(games))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    function onSubnetworkClicked(subnetwork) {
        props.setActiveSubnetwork(subnetwork)
        get(gameBySubnetworkId(props.activeNetwork.id, subnetwork.id), rs => props.setGames(rs))
        props.changeView(subnetworkView)
    }

    function onGameClicked(game) {
        props.setActiveGame(game)
        props.changeView(gameView)
    }

    return (
        <div className={"network-selection-view"}>
            <div className={"network-info"}>
                <img className={"network-info-img"}
                     src={props.activeNetwork.imgSrc}
                />
                <div className={"network-name"}>{props.activeNetwork.title}</div>
                <div className={"network-description"}>{props.activeNetwork.description}</div>
            </div>
            <div className={"subnetworks-label"}>
                Подсети:
            </div>

            <div className={"subnetwork-view-horizontal"}>
                {
                    props.subnetworks.map(subnetwork => (
                        <NetworkItem
                            key={subnetwork.id}
                            title={subnetwork.title}
                            imgSrc={subnetwork.imgSrc}
                            onClick={() => onSubnetworkClicked(subnetwork)}
                        />
                    ))
                }
                <AddSubnetworkItem onClick={() => props.changeView(subnetworkCreationView)}/>

            </div>

            <div className={"games-label"}>
                Игры:
            </div>
            <div className={"games-view-horizontal"}>
                {
                    props.games.map(game => (
                        <GameItem
                            key={game.id}
                            onClick={() => onGameClicked(game)}
                            imgSrc={game.imgSrc}
                            title={game.title}
                        />
                    ))
                }
                {/*<GameItem*/}
                {/*    onClick={() => props.changeView(gameView)}*/}
                {/*    imgSrc={"https://sun9-64.userapi.com/c858416/v858416297/1c6f50/HpIP0jOcov4.jpg"}*/}
                {/*    title={"Звёздные Войны ❖ Ролевая Игра ❖ Star Wars"}*/}
                {/*/>*/}
                {/*<GameItem onClick={() => props.changeView(gameView)}*/}
                {/*          imgSrc={"https://sun9-50.userapi.com/c206728/v206728029/e6b05/y0oZUh43Mp4.jpg"}*/}
                {/*          title={"Гарри Поттер ❖ Ролевая игра ❖ Harry Potter"}*/}
                {/*/>*/}
                {/*<GameItem onClick={() => props.changeView(gameView)}*/}
                {/*          imgSrc={"https://sun9-47.userapi.com/c206628/v206628029/e92bc/tiooZwDgav0.jpg"}*/}
                {/*          title={"Шерлок ❖ Ролевая Игра ❖ Sherlock"}*/}
                {/*/>*/}
                {/*<GameItem onClick={() => props.changeView(gameView)}*/}
                {/*          imgSrc={"https://sun9-47.userapi.com/c206628/v206628029/e92bc/tiooZwDgav0.jpg"}*/}
                {/*          title={"Шерлок ❖ Ролевая Игра ❖ Sherlock"}*/}
                {/*/>*/}
                {/*<GameItem onClick={() => props.changeView(gameView)}*/}
                {/*          imgSrc={"https://sun9-27.userapi.com/c857420/v857420029/1d203f/tKLlbcriafc.jpg"}*/}
                {/*          title={"Ривердейл ❖ Ролевая Игра ❖ Сабрина"}*/}
                {/*/>*/}
                <AddGameItem onClick={() => {
                    Globals.creatingGameByNetwork = true
                    props.changeView(gameCreationView)
                }}/>
            </div>
        </div>
    )
})