import React, { useCallback, useEffect, useState } from 'react';
import TodoItem from './todoItem';

const Todos = () => {
    const [input, setInput] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [error, setError] = useState('');

    // get from localdata
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('taskList'));
        
        if (storedTasks) {
            setTaskList(storedTasks);
        }
    }, []);

    
    // set to localdata
    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);


    // input change
    const handleChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);


    // add todo
    const handleAddTodo = useCallback((e) => {
        e.preventDefault();

        if (input.trim() !== '') {
            const newTask = {
                id: Date.now(),
                name: input,
                completed: false
            };

            setTaskList((prev) => [...prev, newTask]);
            setInput('');
            setError('');
        } else {
            setError('Empty task not allowed');
        }
    }, [input]);


    // delete
    const handleDeleteTodo = useCallback((id) => {
        setTaskList((prev) => prev.filter((item) => item.id !== id));
    }, []);


    // toggle complete
    const handleToggleTodo = useCallback((id) => {
        setTaskList((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );
    }, []);

    
    return (
        <>
            <form onSubmit={handleAddTodo}>
                <h1 style={{ marginBottom: '10px' }}>Todo List</h1>

                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="write task here...."
                />

                <span style={{ color: 'red', marginLeft: '10px' }}>
                    {error}
                </span>

                <button type="submit">Add task</button>
            </form>

            <div
                style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h3
                    style={{
                        textDecoration: "underline",
                        marginBottom: "15px"
                    }}
                >
                    Task lists:
                </h3>

                <ul>
                    {taskList.map((item) => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            handleDeleteTodo={handleDeleteTodo}
                            handleToggleTodo={handleToggleTodo}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Todos;