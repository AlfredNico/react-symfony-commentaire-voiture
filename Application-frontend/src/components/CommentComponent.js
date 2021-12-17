import React from 'react'

export default function CommentComponent({comments}) {
    return (
        <ul>
            {
                comments.map(comment => {
                    return <div key={comment.commentID}>
                            <li> { comment.description } </li>
                            <span> { new Date(comment.createdAt).toLocaleString() } </span>
                        </div>
                })
            }
        </ul>
    )
}
