import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

function Delete() {
    const {userId} = useParams();

    const navi = useNavigate();

    const [user, setUser] = useState({});

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setUser(result.data)
    }

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`);
        navi('/show');
    }

  return (
    <>
        <center>
            <h1>ARE YOU SURE?</h1>
            <button onClick={()=>deleteUser()}>YES</button>
            <NavLink to={`/show`}><button>NO</button></NavLink>
        </center>
    </>
  )
}

export default Delete