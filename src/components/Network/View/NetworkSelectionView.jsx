import React, {useEffect} from "react";
import {connect} from "react-redux";
import {changeView, setNetworks} from "../../../data-layer/ActionCreators";
import Btn from "../../Common/Btn";
import {networkCreationView} from "../../../Views";
import {get} from "../../../util/Http";
import {networkUrl} from "../../../util/Parameters";
import NetworkItem from "../NetworkItem";

function mapStateToProps(state, props) {
    return {
        networks: state.networks
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        changeView: (view) => dispatch(changeView(view)),
        setNetworks: networks => dispatch(setNetworks(networks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(function (props) {

    useEffect(() => {
        get(networkUrl, rs => {
            props.setNetworks(rs)
        })
    }, [])

    return (
        <div className={"network-selection-view"}>
            <div className={"network-selection-view-horizontal"}>
                {
                    props.networks.map(network =>
                        <NetworkItem
                            key={network.id}
                            onClick={() => props.changeViewToNetworkView()}
                            imgSrc={network.imgSrc}
                            title={network.title}
                        />
                    )
                }
                {/*<NetworkItem*/}
                {/*    onClick={() => props.changeViewToNetworkView()}*/}
                {/*    imgSrc={"https://sun9-16.userapi.com/c850436/v850436625/10f403/Q7mCrq-H_AY.jpg"}*/}
                {/*    title={"❖ DREAMS ❖"}*/}
                {/*/>*/}
            </div>
            <Btn text={"Добавить сеть"}
                 onClick={() => props.changeView(networkCreationView)}
            />
        </div>
    )
})