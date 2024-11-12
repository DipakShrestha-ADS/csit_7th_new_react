import {useState, useEffect } from "react"
import useFetchData from "../services/custom_hook"

const CommentPage = ()=>{
    const [comments] = useFetchData('https://jsonplaceholder.typicode.com/comments')
    return(
        <div>
            {
                comments && comments.map(comment =>{
                    return(
                        <div key={comment.id}>
                            <h1>{comment.name}</h1>
                            <p>{comment.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default CommentPage