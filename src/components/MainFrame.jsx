import React from "react"

class MainFrame extends React.Component {
    render() {
        return (
            <div className={"main-vertical"}>
                <div className={"main-frame-head"}>
                    <div className={"head-name"}>Название</div>
                    <div className={"head-logo"}>Логотип</div>
                </div>
                <div className={"main-frame-body"}>
                    <div className={"main-frame-nav"}>
                        <div className={"main-frame-nav-item"}>Доска объявлений</div>
                        <div className={"main-frame-nav-item"}>Мои объявления</div>
                        <div className={"main-frame-nav-item"}>Избранное</div>
                        <div className={"main-frame-nav-item"}>Сообщения</div>
                        <div className={"main-frame-nav-item"}>Мои игры</div>
                        <div className={"main-frame-nav-item"}>Кабинет</div>
                        <div className={"main-frame-nav-item"}>Квесты</div>
                        <div className={"main-frame-nav-item"}>Панель администратора</div>
                    </div>
                    <div className={"main-frame-view"}>
                        <span className={"main-frame-view-title"}>Доска объявлений</span>
                        <div className={"announcement-view-vertical"}>
                            <div className={"announcement-view-header"}>
                                <span className={"announcement-view-header-all-items-label"}>Все объявления</span>
                                <span className={"announcement-view-header-filters-label"}>фильтры</span>
                            </div>
                            <div className={"announcement-view-list"}>
                                <div className={"announcement-view-list-item"}>
                                    <div className={"announcement-view-list-item-title"}>Объявление #1</div>
                                    <div className={"announcement-view-list-item-description"}>
                                        Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла
                                    </div>
                                    <div className={"announcement-view-list-item-footer"}>
                                        <div className={"announcement-view-list-item-footer-item"}>В избранное</div>
                                        <div className={"announcement-view-list-item-footer-item"}>Откликнуться</div>
                                        <div className={"announcement-view-list-item-footer-item"}>Связаться с автором</div>
                                        <div className={"announcement-view-list-item-footer-item"}>Комментарии (0)</div>
                                    </div>
                                </div>
                                <div className={"announcement-view-list-item"}>
                                    <div className={"announcement-view-list-item-title"}>Объявление #1</div>
                                    <div className={"announcement-view-list-item-description"}>
                                        Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла
                                    </div>
                                    <div className={"announcement-view-list-item-footer"}>
                                        <div className={"announcement-view-list-item-footer-item"}>В избранное</div>
                                        <div className={"announcement-view-list-item-footer-item"}>Откликнуться</div>
                                        <div className={"announcement-view-list-item-footer-item"}>Связаться с автором</div>
                                        <div className={"announcement-view-list-item-footer-item"}>Комментарии (0)</div>
                                    </div>
                                </div>
                                {/*<div className={"announcement-view-list-item"}>*/}
                                {/*    <div className={"announcement-view-list-item-title"}>Объявление #1</div>*/}
                                {/*    <div className={"announcement-view-list-item-description"}>*/}
                                {/*        Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла*/}
                                {/*    </div>*/}
                                {/*    <div className={"announcement-view-list-item-footer"}>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>В избранное</div>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>Откликнуться</div>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>Связаться с автором</div>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>Комментарии (0)</div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<div className={"announcement-view-list-item"}>*/}
                                {/*    <div className={"announcement-view-list-item-title"}>Объявление #1</div>*/}
                                {/*    <div className={"announcement-view-list-item-description"}>*/}
                                {/*        Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла  Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла Бла-бла-бла*/}
                                {/*    </div>*/}
                                {/*    <div className={"announcement-view-list-item-footer"}>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>В избранное</div>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>Откликнуться</div>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>Связаться с автором</div>*/}
                                {/*        <div className={"announcement-view-list-item-footer-item"}>Комментарии (0)</div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"main-frame-footer"}>
                    <div className={"footer-copyright"}>Копирайты</div>
                    <div className={"footer-copyright"}>Реклама текстовой строкой</div>
                </div>
            </div>
        );
    }
}

export default MainFrame