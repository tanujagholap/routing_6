import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Add() {
    const {register, handleSubmit} = useForm();

    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data)
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

export default Add