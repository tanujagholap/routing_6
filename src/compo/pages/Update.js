import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {register, handleSubmit} = useForm({defaultValues:
        async()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data });

    const {userId} = useParams()

    const navi = useNavigate();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/show')
    }

  return (
    <center>
    <div>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='r'>ROLL:</label>
            <input type='number' id='r' { ...register('roll')}/>
            <br/>
            <label htmlFor='n'>NAME:</label>
            <input type='text' id='n' { ...register('name')}/>
            <br/>
            <button type='submit'>ADD USER</button>
            <button type='reset'>RESET USER</button>
        </form>
    </div>
    </center>
  )
}

export default Update