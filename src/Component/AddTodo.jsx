import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import BaseUrl from '../BaseUrl';

const AddTodo = () => {
    const navigate = useNavigate();
    const todo_name = useRef()
    const todo_desc = useRef()
    const [message, setMessage] = useState()

    const submitHandle = (e) => {
        e.preventDefault();
        const data = {
            todo_name: todo_name.current.value,
            todo_desc: todo_desc.current.value
        };
        // const baseUrl = "http://127.0.0.1:8000/api/todo/create";

        axios.post(BaseUrl + "create", data).then(
            res => {
                if(res.data.status){
                console.log(res.data.message);
                setMessage(res.data.message);
            }
            navigate("/viewtodo");
            })
            .catch(err => {
                console.log(err);
            })

        todo_name.current.value = '';
        todo_desc.current.value = '';
    }

    return (
        <div className=" flex items-center justify-center h-screen">
            <div className=" text-white p-8 rounded shadow w-full max-w-md">

                <h2 className="text-3xl text-white text-center font-bold mb-6 ">Add Todo</h2>
                <p>{message}</p>
                <form method="POST" className="space-y-4" >
                    <div>
                        <label htmlFor="todo_name" className="block text-white text-xl font-bold">Todo_Name</label>
                        <input type="text" id="todo_name" name="todo_name" ref={todo_name} className="mt-1 text-black block w-full p-2 rounded-md shadow-sm" placeholder='Enter your todo_name' />
                    </div>
                    <div>
                        <label htmlFor="todo_desc" className="block text-xl font-bold text-white">Todo_Desc</label>
                        <input type="text" id="todo_desc" name="todo_desc" ref={todo_desc} className="mt-1 text-black  w-full p-2 rounded-md shadow-sm " placeholder='Enter your todo_desc' />
                    </div><br />
                    <button type="submit" name='submit' onClick={submitHandle} className="w-full bg-gray-500 text-white text-2xl font-bold py-2 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>

                    <Link to="/viewtodo" className="w-full bg-gray-500 text-white text-2xl font-bold py-2 px-4 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">View Todo</Link>
                </form>

            </div>
        </div>
    );
};

export default AddTodo