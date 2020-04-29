import React from "react";

function RestoreComment(props) {
    return (
        <div className={"restore-comment"}>
            <div className={"restore-comment-text"}>
                Комментарий удалён
            </div>
            <div className={"restore-comment-link"}>[Восстановить]</div>
        </div>
    )
}

export default RestoreComment
