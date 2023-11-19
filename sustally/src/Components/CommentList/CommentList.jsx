import React from "react";
import Comments from "../Comment/Comments";

const CommentList = ({comments}) => {
    return(
        <div>
            {comments.map((comment, index) => (
            <Comments key={index} text={comment} />
        ))}
        </div>
    )
}

export default CommentList