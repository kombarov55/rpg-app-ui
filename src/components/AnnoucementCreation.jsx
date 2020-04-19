import React from "react"
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
            <div className={"p-grid p-dir-col"} >
                <div className={"p-col"}>
                    <h3>Создание объявления</h3>
                </div>
                <div className={"p-col"}>
                    <InputMask mask={"Название..."}/>
                </div>
                <div className={"p-col"}>
                    <span>Тип игры: </span>
                </div>
                <div className={"p-col"}>
                    <SelectButton options={this.gameTypeValues}/>
                </div>
                <div className={"p-col"}>
                    <span>Пол персонажа:</span>
                </div>
                <div className={"p-col"}>
                    <SelectButton options={this.sexValues}/>
                </div>
                <div className={"p-col"}>
                    <InputMask mask={"Минимальный возраст персонажа..."}/>
                </div>
                <div className={"p-col"}>
                    <InputMask mask={"Максимальный возраст персонажа..."}/>
                </div>
                <div className={"p-col"}>
                    <span>Текст объявления:</span>
                </div>
                <div className={"p-col"}>
                    <InputTextarea autoResize={true}/>
                </div>
                <div className={"p-col"}>
                    <span>Картинка к объявлению (не более 3):</span>
                </div>
                <div className={"p-col"}>
                    <FileUpload mode={"basic"}/>
                    <FileUpload mode={"basic"}/>
                    <FileUpload mode={"basic"}/>
                </div>
                <div className={"p-col"}>
                    <span>Анонимно: </span>
                    <InputSwitch/>
                </div>
                <div className={"p-col"}>
                    <span>Комментарии:</span>
                    <InputSwitch/>
                </div>
                <div className={"p-col"}>
                    <Button label={"Сохранить"}/>
                </div>
            </div>
        )
    }
}

export default AnnoucementCreation