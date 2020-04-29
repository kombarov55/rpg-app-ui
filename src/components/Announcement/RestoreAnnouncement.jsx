import React from "react";

function RestoreAnnouncement(props) {
    return (
        <div className={"restore-announcement"}>
            <div className={"restore-announcement-text"}>
                Объявление удалено
            </div>
            <div className={"restore-announcement-link"}>
                [Восстановить]
            </div>
        </div>
    )
}

export default RestoreAnnouncement