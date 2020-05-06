import React from "react";
import {connect} from "react-redux";
import NetworkItem from "../NetworkItem";

function mapStateToProps(state, props) {
    return {}
}

function mapDispatchToProps(dispatch, props) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    return (
        <div className={"network-view"}>
            <div className={"network-view-horizontal"}>
                <NetworkItem
                    imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}
                    title={"❖ DREAMS ❖"}
                />
                <NetworkItem
                    imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}
                    title={"❖ DREAMS ❖"}
                />
                <NetworkItem
                    imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}
                    title={"❖ DREAMS ❖"}
                />
                <NetworkItem
                    imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}
                    title={"❖ DREAMS ❖"}
                />
                <NetworkItem
                    imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}
                    title={"❖ DREAMS ❖"}
                />
            </div>
        </div>
    )
})