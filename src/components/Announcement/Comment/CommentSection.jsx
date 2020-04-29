import React from "react";
import CommentsCreationForm from "./CommentsCreationForm";

class CommentSection extends React.Component {
    render() {
        return (
            <div className={"comment-section"}>
                Comments...
                <CommentsCreationForm/>
            </div>
        )
    }
}

export default CommentSection