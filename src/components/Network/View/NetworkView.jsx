import React, {useEffect} from "react";
import {connect} from "react-redux";
import NetworkItem from "../NetworkItem";
import {gameCreationView, gameView, subnetworkCreationView, subnetworkView} from "../../../Views";
import {changeView, setActiveSubnetwork, setGames, setSubnetworks} from "../../../data-layer/ActionCreators";
import AddSubnetworkItem from "../AddSubnetworkItem";
import AddGameItem from "../AddGameItem";

function mapStateToProps(state, props) {
    return {
        activeNetwork: state.activeNetwork,
        subnetworks: state.subnetworks
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        changeView: view => dispatch(changeView(view)),
        setSubnetworks: subnetworks => dispatch(setSubnetworks(subnetworks)),
        setActiveSubnetwork: subnetwork => dispatch(setActiveSubnetwork(subnetwork))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    useEffect(() => {


    })

    function onSubnetworkClicked(subnetwork) {
        props.setActiveSubnetwork(subnetwork)
        props.changeView(subnetworkView)
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

            {/*<div className={"network-info"}>*/}
            {/*    <img className={"network-info-img"}*/}
            {/*         src={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}*/}
            {/*    />*/}
            {/*    <div className={"network-name"}>❖ DREAMS ❖</div>*/}
            {/*    <div className={"network-description"}>*/}
            {/*        Здравствуй, дорогой друг.*/}
            {/*        Я немного объясню, что мы такое.*/}
            {/*        Нам не важно, где ты работал раньше или работаешь сейчас. Здесь тебя примут вне зависимости от места*/}
            {/*        жительства, семейного положения, ориентации, веры или расы. Здесь мы стараемся дать то, в поисках*/}
            {/*        чего так часто люди блуждают в сети.*/}
            {/*        Это — твой дом.*/}
            {/*    </div>*/}
            {/*</div>*/}

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

                {/*<NetworkItem*/}
                {/*    onClick={() => props.changeView(subnetworkView)}*/}
                {/*    imgSrc={"https://sun9-43.userapi.com/c855132/v855132195/1b06e2/3otc23chxQw.jpg"}*/}
                {/*    title={"❖ ASIADREAMS ❖"}*/}
                {/*/>*/}
                {/*<NetworkItem*/}
                {/*    onClick={() => props.changeView(subnetworkView)}*/}
                {/*    imgSrc={"https://sun9-3.userapi.com/c854416/v854416948/e6508/Muu44SAOHJY.jpg"}*/}
                {/*    title={"❖ BOOKSDREAMS ❖"}*/}
                {/*/>*/}
                {/*<NetworkItem*/}
                {/*    onClick={() => props.changeView(subnetworkView)}*/}
                {/*    imgSrc={"https://sun9-70.userapi.com/c855032/v855032568/1a8a73/TN5VCGj9Vlc.jpg"}*/}
                {/*    title={"❖ COMICSDREAMS ❖"}*/}
                {/*/>*/}
                <AddSubnetworkItem onClick={() => props.changeView(subnetworkCreationView)}/>

            </div>

            <div className={"games-label"}>
                Игры:
            </div>
            <div className={"games-view-horizontal"}>
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
                <AddGameItem onClick={() => props.changeView(gameCreationView)}/>
            </div>
        </div>
    )
})