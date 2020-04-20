import React from "react"
import {SelectButton} from "primereact/selectbutton";
import {InputTextarea} from "primereact/inputtextarea";
import {FileUpload} from "primereact/fileupload";
import {InputSwitch} from "primereact/inputswitch";
import {Button} from "primereact/button";

import {GameTypes} from "../data-layer/enums/GameType";
import {Sex} from "../data-layer/enums/Sex";
import {InputText} from "primereact/inputtext";
import {addAnnouncement} from "../data-layer/ActionCreators";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return {
        addAnouncement: (state) => {
            dispatch(addAnnouncement(
                state.title,
                state.gameType,
                state.sex,
                state.minAge,
                state.maxAge,
                state.description,
                state.anonymous,
                state.commentsEnabled
            ))
        }
    }
}

class ConnectedAnnoucementCreation extends React.Component {

    gameTypeValues = [
        {label: "ЛС", value: GameTypes.LS},
        {label: "Конференция", value: GameTypes.CONFERENCE},
        {label: "Группа", value: GameTypes.GROUP}
    ]

    sexValues = [
        {label: "М", value: Sex.MALE},
        {label: "Ж", value: Sex.FEMALE}
    ]

    state = {
        title: null,
        gameType: null,
        sex: null,
        minAge: null,
        maxAge: null,
        description: null,
        anonymous: false,
        commentsEnabled: true
    }

    render() {
        return (
            <div className={"p-grid p-dir-col announcement-creation-vertical"}>
                <div className={"p-col"}>
                    Название*
                    <InputText value={this.state.title}
                               onChange={e => {
                                   console.log(e)
                                   this.setState({title: e.target.value})
                               }
                               }/>
                </div>
                <div className={"p-col"}>
                    <span>Тип игры: </span>
                </div>
                <div className={"p-col"}>
                    <SelectButton
                        options={this.gameTypeValues}
                        value={this.state.gameType}
                        onChange={(e) => this.setState({gameType: e.value})}
                    />
                </div>
                <div className={"p-col"}>
                    <span>Пол персонажа:</span>
                </div>
                <div className={"p-col"}>
                    <SelectButton options={this.sexValues}
                                  value={this.state.sex}
                                  onChange={(e) => this.setState({sex: e.value})}
                    />
                </div>
                <div className={"p-col"}>
                    Минимальный возраст персонажа:
                    <InputText value={this.state.minAge}
                               onChange={(e) => this.setState({minAge: e.target.value})}
                    />
                </div>
                <div className={"p-col"}>
                    Максимальный возраст персонажа:
                    <InputText value={this.state.maxAge}
                               onChange={(e) => this.setState({maxAge: e.target.value})}
                    />
                </div>
                <div className={"p-col"}>
                    <span>Текст объявления:</span>
                </div>
                <div className={"p-col"}>
                    <InputTextarea autoResize={true}
                                   cols={50}
                                   rows={10}
                                   value={this.state.description}
                                   onChange={(e) => this.setState({description: e.target.value})}
                    />
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
                    <InputSwitch checked={this.state.anonymous}
                                 onChange={(e) => this.setState({anonymous: e.value})}
                    />
                </div>
                <div className={"p-col"}>
                    <span>Комментарии:</span>
                    <InputSwitch checked={this.state.commentsEnabled}
                                 onChange={(e) => this.setState({commentsEnabled: e.value})}
                    />
                </div>
                <div className={"p-col"}>
                    <Button label={"Сохранить"} onClick={() => this.props.addAnouncement(this.state)}/>
                </div>
            </div>
        )
    }
}

const AnnoucementCreation = connect(null, mapDispatchToProps)(ConnectedAnnoucementCreation)

export default AnnoucementCreation