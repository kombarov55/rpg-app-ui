import React from "react";
import {connect} from "react-redux";
import {InputTextarea} from "primereact/inputtextarea";

export default function(props) {
    return (
        <div className={"conversation-input"}>
            <InputTextarea
                rows={1}
                className={"conversation-input-textarea"}
                autoResize={true}
            />
            <i className={"pi pi-arrow-right"}
               style={{"fontSize": "3vh", "margin": "1vh 2.5vw"}}
            />
        </div>
    )
}