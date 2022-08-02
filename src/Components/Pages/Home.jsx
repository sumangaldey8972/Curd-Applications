import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        const res = await axios.get("http://localhost:8000/users")
        // console.log(res.data)
        setUsers(res.data)
    }

    const deleteUser= async (id)=>{
        await axios.delete(`http://localhost:8000/users/${id}`)
        loadUsers();
    }

    return (
        <div className='container' >
            <div className='py-4' >
                <h1>Home Page</h1>
                <table class="table table border shadow">
                    <thead class="thead-dark" >
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => (
                                <tr key={i} >
                                    <th scope='row'> {i + 1} </th>
                                    <td> {user.name} </td>
                                    <td> {user.username} </td>
                                    <td> {user.email} </td>
                                    <td>
                                        <Link class="btn btn-primary m-2" to={`/users/${user.id}`}>  View</Link>
                                        <Link class="btn btn-secondary m-2" to={`/users/edit/${user.id}`}>  Edit</Link>
                                        <Link class="btn btn-danger" to="/" onClick={()=>deleteUser(user.id)} > Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home