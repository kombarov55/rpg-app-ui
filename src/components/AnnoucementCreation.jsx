import React from "react"
import {SelectButton} from "primereact/selectbutton";
import {FileUpload} from "primereact/fileupload";
import {InputSwitch} from "primereact/inputswitch";

import {connect} from "react-redux";
import {useForm} from "react-hook-form";

import {addAnnouncement, changeView} from "../data-layer/ActionCreators";

import {generateUuid} from "../util/uuid";

import {announcementView} from "../View";
import {GameTypes} from "../data-layer/enums/GameType";
import {Sex} from "../data-layer/enums/Sex";
import {uploadUrl} from "../util/properties";
import {createAnnouncement} from "../util/HttpRequests";

const uploadUid = generateUuid()

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

    const {errors, register, handleSubmit} = useForm()

    function onSubmit() {
        props.addAnouncement(state)
        props.changeView()
        createAnnouncement(state.title, state.gameType.id, state.sex.id, state.minAge, state.maxAge, state.description, state.anonymous, state.commentsEnabled)
    }

    return (
        <div className={"p-grid p-dir-col announcement-creation-vertical"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={"p-col"}>
                    <input placeholder={"Название:"}
                           name={"title"}
                           ref={register({required: true})}
                           value={state.title}
                           onChange={e => state.title = e.target.value}
                    />
                    <span className={"errors"}>
                    {errors.title && "Обязательное поле"}
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
                    <input placeholder={"Минимальный возраст персонажа"}
                           name={"minAge"}
                           value={state.minAge}
                           onChange={(e) => state.minAge = e.target.value}
                           ref={register({pattern: /^[0-9]*$/i})}
                    />
                    <span className={"errors"}>
                        {errors.minAge && "Поле должно быть цифрой"}
                    </span>
                </div>
                <div className={"p-col"}>
                    <input
                        placeholder={"Максимальный возраст персонажа"}
                        name={"maxAge"}
                        value={state.maxAge}
                        onChange={(e) => state.maxAge = e.target.value}
                        ref={register({pattern: /^[0-9]*$/i})}
                    />
                    <span className={"errors"}>
                    {errors.maxAge && "Поле должно быть цифрой"}
                    </span>
                </div>
                <div className={"p-col"}>
                    <span>Текст объявления:</span>
                </div>
                <div className={"p-col"}>
                    <textarea name={"description"}
                              value={state.description}
                              onChange={(e) => state.description = e.target.value}
                              ref={register({required: true})}
                    />
                    <span className={"errors"}>
                        {errors.description && "Обязательное поле"}
                    </span>
                </div>
                <div className={"p-col"}>
                    <span>Картинка к объявлению (не более 3):</span>
                </div>
                <div className={"p-col"}>
                    <FileUpload name={"file1"}
                                url={uploadUrl + "/" + uploadUid}
                                mode={"basic"}
                                auto={true}
                                maxFileSize={262144}
                                chooseLabel={"Выберите файл.."}
                    />
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
                    <input className={"submit-btn"} type={"submit"} value={"Сохранить"}/>
                </div>

            </form>
        </div>
    )
}

const AnnoucementCreation = connect(null, mapDispatchToProps)(ConnectedAnnoucementCreation)

export default AnnoucementCreation