import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BaseUrl from '../BaseUrl';

const ViewTodo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodo();
    }, []);

    const getTodo = () => {
        axios.get( BaseUrl + "read")
            .then(res => {
                if (res.data.status) {
                    setTodos(res.data.data);
                } else {
                    console.error(res.data.message);
                }
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-white p-8 rounded shadow w-full max-w-md">
                <h2 className="text-3xl text-white text-center font-bold mb-6">View Todos</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">S/N</th>
                            <th className="px-4 py-2">Todo</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{todo.todo_name}</td>
                                <td className="border px-4 py-2">{todo.todo_desc}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewTodo;
