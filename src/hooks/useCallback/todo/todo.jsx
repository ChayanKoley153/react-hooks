import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState({
        todo: ""
    });


    const handleAddTodo = (e) => {

        const newTodo = {
            id: Date.now(),
            ...formData
        }
        setTodos(...todos, newTodo);
    }

    console.log(todos);
    

    const handleDeleteTodo = (e) => {
         
    }

    const handleToggleTodo = (e) => {
         
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData);
    

    return (
        <>
            <form action="">
                <h1>todo list</h1>
                <input type="text" name='todo' onChange={handleChange} placeholder='add task....' />
                <button onClick={() => handleAddTodo()}>Add task</button>
            </form>

            <div>
                <h3>Task list</h3>
            </div>
        </>
    )
}

export default Todos
