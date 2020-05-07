import React from "react";
import {connect} from "react-redux";
import {changeView} from "../../../data-layer/ActionCreators";
import Btn from "../../Common/Btn";
import {networkCreationView} from "../../../Views";

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
        <div className={"network-selection-view"}>
            {/*<div className={"network-selection-view-horizontal"}>*/}
            {/*    <NetworkItem*/}
            {/*        onClick={() => props.changeViewToNetworkView()}*/}
            {/*        imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}*/}
            {/*        title={"❖ DREAMS ❖"}*/}
            {/*    />*/}
            {/*    <NetworkItem*/}
            {/*        onClick={() => props.changeViewToNetworkView()}*/}
            {/*        imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}*/}
            {/*        title={"❖ DREAMS ❖"}*/}
            {/*    />*/}
            {/*    <NetworkItem*/}
            {/*        onClick={() => props.changeViewToNetworkView()}*/}
            {/*        imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}*/}
            {/*        title={"❖ DREAMS ❖"}*/}
            {/*    />*/}
            {/*    <NetworkItem*/}
            {/*        onClick={() => props.changeViewToNetworkView()}*/}
            {/*        imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}*/}
            {/*        title={"❖ DREAMS ❖"}*/}
            {/*    />*/}
            {/*    <NetworkItem*/}
            {/*        onClick={() => props.changeViewToNetworkView()}*/}
            {/*        imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}*/}
            {/*        title={"❖ DREAMS ❖"}*/}
            {/*    />*/}
            {/*</div>*/}
            <Btn text={"Добавить сеть"}
                 onClick={() => props.changeView(networkCreationView)}
            />
        </div>
    )
})