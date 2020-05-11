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
        <>
            <div className={"list-input-horizontal"}>
                <input className={"questionnaire-item-list-input"}
                       value={props.value}
                       onChange={e => props.onChange(e)}
                />
                <i className={"pi pi-plus-circle"}
                   style={{"fontSize": "5vmax"}}
                   onClick={() => props.onSubmit(props.value)}
                />
            </div>
            <div className={"list-input-values"}>
                {
                    props.values.map(it => <div key={it} className={"list-input-value"}>{it}</div>)
                }
                {/*<div className={"list-input-value"}>Москва</div>*/}
                {/*<div className={"list-input-value"}>Тула</div>*/}
                {/*<div className={"list-input-value"}>Воронеж</div>*/}
            </div>
        </>
    )
})