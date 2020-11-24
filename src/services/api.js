import axios from 'axios';

const instance = axios.create({
    baseURL:'https://5faab88db5c645001602b103.mockapi.io/api/',
    //baseURL:'https://5fa97367c9b4e90016e6a7ec.mockapi.io/api',
});

export const getTodosList = () => {
    return instance.get('/todos')
}

export const createNewTodo = (todo) => {
    return instance.post('/todos',todo)
}

export const deleteTodo = (todo) => {
    return instance.delete(`/todos/${todo.id}`)
}

export const updateTodo = (todo) => {
    return instance.put(`/todos/${todo.id}`,todo);
}

