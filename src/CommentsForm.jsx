import { useState } from "react"

export default function CommentsForm({addNewComment}){

    let [ formData , setFormData ] = useState({
        username:"",
        remarks:"",
        rating:"5"
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData , [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        addNewComment(formData)
        setFormData({
            username:"",
            remarks:"",
            rating:"5"
        })
    }

    return(
        <div>
        <h4>Give a Comment !!</h4>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="username">Username: </label>&nbsp;&nbsp;&nbsp;
            <input placeholder="Enter Username" id="username" value={formData.username} onChange={handleInputChange} name="username"></input>

            <br></br><br></br>

            <label htmlFor="remarks">Remarks: </label>&nbsp;&nbsp;&nbsp;
            <textarea placeholder="Add a Remark" id="remarks" value={formData.remarks} onChange={handleInputChange} name="remarks"></textarea>

            <br></br><br></br>

            <label htmlFor="rating">Ratings: </label>&nbsp;&nbsp;&nbsp;
            <input placeholder="Add rating" type="number" min={1} max={5} id="rating" value={formData.rating} onChange={handleInputChange} name="rating" ></input>

            <br></br><br></br>
            <button>Submit</button>
        </form>
        </div>
    )
}