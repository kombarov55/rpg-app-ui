import React from "react"
import {InputText} from "primereact/inputtext";
import {MultiSelect} from "primereact/multiselect";
import {SelectButton} from "primereact/selectbutton";
import {InputTextarea} from "primereact/inputtextarea";
import {FileUpload} from "primereact/fileupload";
import {ScrollPanel} from "primereact/scrollpanel";
import {InputMask} from "primereact/inputmask";
import {InputSwitch} from "primereact/inputswitch";
import {Button} from "primereact/button";

class AnnoucementCreation extends React.Component {

    gameTypeValues = [
        {label: "ЛС", value: ""},
        {label: "Конференция", value: ""},
        {label: "Группа", value: ""}
    ]

    sexValues = [
        {label: "М", value: ""},
        {label: "Ж", value: ""}

    ]

    render() {
        return (
            <div className={"announcement-creation-main-vertical"}>
                <InputMask mask={"Название..."}/>
                <SelectButton options={this.gameTypeValues}/>
                <SelectButton options={this.sexValues}/>
                <InputMask mask={"Минимальный возраст персонажа..."}/>
                <InputMask mask={"Максимальный возраст персонажа..."}/>
                <span>Текст объявления:</span>
                <InputTextarea autoResize={true}/>
                <span>Картинка к объявлению (не более 3):</span>
                <FileUpload mode={"basic"}/>
                <FileUpload mode={"basic"}/>
                <FileUpload mode={"basic"}/>
                <span>Анонимно: </span>
                <InputSwitch/>
                <span>Комментарии:</span>
                <InputSwitch/>
                <Button label={"Сохранить"}/>
                {/*<div className={"announcement-creation-horizontal"}>*/}
                {/*    <span className={"announcement-creation-label"}>Название*</span>*/}
                {/*    <InputText style={this.inputStyle} />*/}
                {/*</div> */}
            </div>
        );
    }
}

export default AnnoucementCreation