import React from "react"
import {SelectButton} from "primereact/selectbutton";
import {InputTextarea} from "primereact/inputtextarea";
import {FileUpload} from "primereact/fileupload";
import {InputSwitch} from "primereact/inputswitch";
import {Button} from "primereact/button";

import {useForm} from "react-hook-form";

import {GameTypes} from "../data-layer/enums/GameType";
import {Sex} from "../data-layer/enums/Sex";
import {InputText} from "primereact/inputtext";
import {addAnnouncement, changeView} from "../data-layer/ActionCreators";
import {connect} from "react-redux";
import {announcementView} from "../View";
import {generateUuid} from "../data-layer/Utils";

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
        },
        changeView: () => dispatch(changeView(announcementView))
    }
}

const gameTypeValues = [
    {label: "ЛС", value: GameTypes.LS},
    {label: "Конференция", value: GameTypes.CONFERENCE},
    {label: "Группа", value: GameTypes.GROUP}
]

const sexValues = [
    {label: "М", value: Sex.MALE},
    {label: "Ж", value: Sex.FEMALE}
]

const state = {
    title: null,
    gameType: null,
    sex: null,
    minAge: null,
    maxAge: null,
    description: null,
    anonymous: false,
    commentsEnabled: true
}

function ConnectedAnnoucementCreation(props) {

    const {register, handleSubmit} = useForm()

    function onSubmit() {
        alert("OK")
        props.addAnouncement(state)
        props.changeView()
    }

    return (
        <div className={"p-grid p-dir-col announcement-creation-vertical"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"p-col"}>
                    <span className={"p-float-label"}>
                        <InputText name={"title"}
                                   value={state.title}
                                   ref={register}
                                   onChange={e => {
                                       state.title = e.target.value
                                   }}
                                   style={{"width": "100%"}}
                        />
                        <label htmlFor={"in"}>
                            Название:
                        </label>
                    </span>
                </div>
                <div className={"p-col"}>
                    <span>Тип игры: </span>
                </div>
                <div className={"p-col"}>
                    <SelectButton
                        options={gameTypeValues}
                        value={state.gameType}
                        onChange={(e) => state.gameType = e.target.value}
                    />
                </div>
                <div className={"p-col"}>
                    <span>Пол персонажа:</span>
                </div>
                <div className={"p-col"}>
                    <SelectButton options={sexValues}
                                  value={state.sex}
                                  onChange={(e) => state.sex = e.value}
                    />
                </div>
                <div className={"p-col"}>
                    <div className={"p-float-label"}>
                        <InputText name={"minAge"}
                                   value={state.minAge}
                                   onChange={(e) => state.minAge = e.target.value}
                                   style={{"width": "100%"}}
                        />
                        <label htmlFor={"in"}>
                            Минимальный возраст персонажа:
                        </label>
                    </div>
                </div>
                <div className={"p-col"}>
                    <div className={"p-float-label"}>
                        <InputText name={"maxAge"}
                                   value={state.maxAge}
                                   onChange={(e) => state.maxAge = e.target.value}
                                   style={{"width": "100%"}}
                        />
                        <label htmlFor={"in"}>Максимальный возраст персонажа:</label>
                    </div>
                </div>
                <div className={"p-col"}>
                    <span>Текст объявления:</span>
                </div>
                <div className={"p-col"}>
                    <InputTextarea name={"description"} autoResize={true}
                                   value={state.description}
                                   onChange={(e) => state.description = e.target.value}
                                   style={{"width": "100%"}}
                    />
                </div>
                <div className={"p-col"}>
                    <span>Картинка к объявлению (не более 3):</span>
                </div>
                <div className={"p-col"}>
                    <FileUpload name={"file1"}
                                url={"http://localhost:8080/upload/" + generateUuid()}
                                mode={"basic"}
                                auto={"true"}
                                chooseLabel={"Выберите файл.."}/>
                </div>
                <div className={"p-col"}>
                    <div className={"p-grid p-dir-row"}>
                        <div className={"p-col"}>
                            Анонимно:
                        </div>
                        <div className={"p-col"}>
                            <InputSwitch checked={state.anonymous}
                                         onChange={(e) => state.anonymous = e.value}/>
                        </div>
                    </div>
                </div>
                <div className={"p-col"}>
                    <div className={"p-grid p-dir-row"}>
                        <div className={"p-col"}>
                            Комментарии:
                        </div>
                        <div className={"p-col"}>
                            <InputSwitch checked={state.commentsEnabled}
                                         onChange={(e) => state.commentsEnabled = e.value}/>
                        </div>
                    </div>
                </div>
                <div className={"p-col"}>
                    {/*<Button label={"Сохранить"} onClick={() => }/>*/}
                </div>
                <input type={"submit"}/>
            </form>
        </div>
    )
}

const AnnoucementCreation = connect(null, mapDispatchToProps)(ConnectedAnnoucementCreation)

export default AnnoucementCreation