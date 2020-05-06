import React from "react";
import {connect} from "react-redux";
import NetworkItem from "../NetworkItem";

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(state, props) {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(function (props) {
    return (
        <div className={"network-selection-view"}>
            <div className={"network-info"}>
                <img className={"network-info-img"}
                     src={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}
                />
                <div className={"network-name"}>❖ DREAMS ❖</div>
                <div className={"network-description"}>
                    Здравствуй, дорогой друг.
                    Я немного объясню, что мы такое.
                    Нам не важно, где ты работал раньше или работаешь сейчас. Здесь тебя примут вне зависимости от места жительства, семейного положения, ориентации, веры или расы. Здесь мы стараемся дать то, в поисках чего так часто люди блуждают в сети.
                    Это — твой дом.
                </div>
            </div>

            <div className={"subnetworks-label"}>
                Подсети:
            </div>

            <div className={"subnetwork-view-horizontal"}>
                <NetworkItem
                    imgSrc={"https://sun9-43.userapi.com/c855132/v855132195/1b06e2/3otc23chxQw.jpg"}
                    title={"❖ ASIADREAMS ❖"}
                />
                <NetworkItem
                    imgSrc={"https://sun9-3.userapi.com/c854416/v854416948/e6508/Muu44SAOHJY.jpg"}
                    title={"❖ BOOKSDREAMS ❖"}
                />
                <NetworkItem
                    imgSrc={"https://sun9-70.userapi.com/c855032/v855032568/1a8a73/TN5VCGj9Vlc.jpg"}
                    title={"❖ COMICSDREAMS ❖"}
                />
            </div>
        </div>
    )
})