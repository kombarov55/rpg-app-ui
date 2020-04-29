import React from "react";
import CommentsCreationForm from "./CommentsCreationForm";

class CommentSection extends React.Component {
    render() {
        return (
            <div className={"comment-section"}>
                Comments...
                <CommentsCreationForm announcementId={this.props.announcementId} />
            </div>
        )
    }
}

export default CommentSection