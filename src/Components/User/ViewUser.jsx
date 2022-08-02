import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewUser() {

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    console.log(user)

    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    }, [])

    const loadUser=async()=>{
        const res = await axios.get(`http://localhost:8000/users/${id}`)
        setUser(res.data)
    }


  return (
    <div style={{listStyle:"none"}} >

        <Link class="btn btn-secondary m-4 py-2 " to="/" >Back TO Home</Link  >

        <h2>User Details</h2>
        <ul  >
            <li> Name: {user.name} </li>
            <li> User Name: {user.username} </li>
            <li> Email Address: {user.email} </li>
            <li> Phone Number: {user.phone} </li>
            <li> Webiste: {user.website} </li>
        </ul>
    </div>
  )
}

export default ViewUser