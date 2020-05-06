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
        <div className={"mobile-button"}
             onClick={() => props.onClick() == null ? alert("pass onClick() to props") : props.onClick()}>
            {props.text}
        </div>
    )
})