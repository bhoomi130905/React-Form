import { useState } from "react"
import "./AllComments.css"
import CommentsForm from "./CommentsForm"

export default function AllComments(){

    let [ comment , setComment ] = useState([{
        username: "Bhoomi",
        remarks: "Good job!",
        rating: 5
    }])

    let addNewComment = (comment) => {
        setComment((currComment) => [...currComment , comment]
        )
    }

    return(
    <div>
        <CommentsForm addNewComment={addNewComment}/>
        <h3>All Comments !!</h3>
        {comment.map((comment , key) => (
            <div className="comment" key={idx}>
                <span>{comment.remarks}</span>&nbsp;&nbsp;
                <span>(rating = {comment.rating})</span>
                <p>- {comment.username}</p>
            </div>
        ))}
    </div>
    )
}