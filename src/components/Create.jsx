import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/Slice';
import { useNavigate } from 'react-router-dom';




const Create = () => {
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [passport,setPassport] = useState("");
    // const [destination,setDestination] = useState("");

    const [users,setUsers] = useState({});

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getUserData = (e) => {
        setUsers({...users, [e.target.name] : e.target.value });
        console.log(users);
    }

    // const {users,loading} = useSelector((state)=>state.globalstore.users)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users));
        console.log("submit",users)
        navigate("/")
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-xl mb-1 text-center'>Add New User</h3>
                <div>
                    <label className='form-label'>Name: </label>
                    <input type='text' name='name' className='form-control' onChange={getUserData}/>
                </div>
                <div>
                    <label className='form-label'>Email: </label>
                    <input type='email' name='email' className='form-control' onChange={getUserData}/>
                </div>
                <div>
                    <label className='form-label'>Passport: </label>
                    <input type='text' name='passport' className='form-control' onChange={getUserData}/>
                </div>
                <div>
                    <label className='form-label'>Destination: </label>
                    <input type='text' name='destination' className='form-control' onChange={getUserData}/>
                </div><br/>
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create;