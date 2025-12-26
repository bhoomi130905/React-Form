import { useState } from "react"

export default function Form(){

    let [ formData , setFormData ] = useState({
        fullName: "",
        username: "",
        password: ""
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData , [event.target.name]: event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        setFormData({
        fullName: "",
        username: "",
        password: ""
    })
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name : </label>
            <br></br>
            <br></br>
            <input placeholder="Enter Full Name" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" type="text"></input>

            <br></br>
            <br></br>

            <label htmlFor="username">Username : </label>
            <br></br>
            <br></br>
            <input placeholder="Enter Username" value={formData.username} onChange={handleInputChange} id="username" name="username" type="text"></input>

            <br></br>
            <br></br>

            <label htmlFor="password">Password : </label>
            <br></br>
            <br></br>
            <input placeholder="Enter Password" value={formData.password} onChange={handleInputChange} id="password" name="password" type="password"></input>
            <br></br>
            <br></br>
            <button>Submit</button>

        </form>
    )
}