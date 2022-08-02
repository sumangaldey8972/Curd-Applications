import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

function EditUser() {

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })

    const {id} = useParams()

    useEffect(()=>{
        loadUser();
    }, [])

    const onInputChange=(e)=>{
        // console.log(e.target.value)
        setUser({...user, [e.target.name] : e.target.value})
    }

    const onSubmit= async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:8000/users/${id}`, user);
        <Navigate to="/"/>
    }

    const loadUser= async()=>{
        const res = await axios.get(`http://localhost:8000/users/${id}`)
        console.log(res)
        setUser(res.data)
    }

    return (
        <div style={{ width: "30%", margin:"auto", marginTop:"4rem" }}>
            <form onSubmit={(e)=> onSubmit(e)} >
                <h2>Edit User</h2>
                <div class="form-group">
                    <input value={user.name} type="text" name="name" class="form-control m-2" onChange={(e)=>onInputChange(e)}  placeholder="Enter Your Name" />
                </div>
                <div class="form-group">
                    <input type="text" value={user.username} name="username" class="form-control m-2 " onChange={(e)=>onInputChange(e)}  placeholder="Enter Your UserName" />
                </div>
                <div class="form-group">
                    <input type="text" value={user.email} name="email" class="form-control m-2 " onChange={(e)=>onInputChange(e)}  placeholder="Enter Your Email" />
                </div>
                <div class="form-group">
                    <input type="text" value={user.phone}  name="phone" class="form-control m-2" onChange={(e)=>onInputChange(e)}  placeholder="Enter Your PhoneNumber" />
                </div>
                <div class="form-group">
                    <input type="text" value={user.website} name="website" class="form-control m-2"  onChange={(e)=>onInputChange(e)} placeholder="Enter Your Website" />
                </div>
                <button type="submit" class="btn btn-primary">Update User</button>
            </form>
        </div>
    )
}

export default EditUser