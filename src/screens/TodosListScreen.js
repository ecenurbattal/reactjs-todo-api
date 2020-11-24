import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button';
import { FormContainer } from '../components/FormElements/FormElements.styles';
import Input from '../components/Input/Input';
import Loader from '../components/Loader/Loader';
import TodosList from '../components/TodosList/TodosList';
import {createNewTodo, deleteTodo, getTodosList, updateTodo } from '../services/api';

const TodosListScreen = () => {

    const [todos,setTodos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [todo,setTodo] = useState({
        title:'',
        isDone:false,
        user:'ecenurbattal'
    })

    useEffect(() => {
        init();
    },[]);

    const init = async () => {
        try {
            const {data} = await getTodosList()
            setTodos(data.filter(item => item.user==='ecenurbattal'));
            setLoading(false);
        } catch(err){
            setError(err)
        }
    };

    const handleAddTodoSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const {data} = await createNewTodo(todo);
        } catch(err) {
            setError(err);
        }
        init();
    }
    
    const handleDoneTodoClick = async (todo) => {
        setError('');

        try{
            const {data} = await updateTodo(todo)
        } catch(err) {
            setError(err)
        }
        init();
    }

    const handleDeleteTodoClick = async (todo) => {
        setLoading(true);
        setError('');

        try {
            const {data} = await deleteTodo(todo); 
        } catch(err) {
            setError(err);
        }
        init();

    }

    const handleListItemClick = async (todo) => {
        setLoading(true);
        setError('');

        try {
            const {data} = await updateTodo(todo);
        } catch(err) {
            setError(err)
        }
        init();
    }

    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <TodosList onListItemClick={handleListItemClick} onDoneClick={handleDoneTodoClick} onDeleteClick={handleDeleteTodoClick} todos={todos}/>
            <FormContainer onSubmit={handleAddTodoSubmit}>
                <Input 
                    type="text"
                    size="30"
                    name="post[todo]"
                    placeholder="Add new todo"
                    value={todo.title}
                    onChange={(event) => {
                        setTodo({
                            ...todo,
                            title: event.target.value
                        })
                    }}
                />
                <Button text="Add" type="submit"/>
            </FormContainer>
        </div>
    )
}

export default TodosListScreen
