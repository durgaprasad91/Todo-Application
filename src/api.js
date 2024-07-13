import axios from 'axios';

const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = () => axios.get(API_URL);
export const fetchTodoById = (id) => axios.get(`${API_URL}/${id}`);
export const addTodo = (todo) => axios.post(`${API_URL}/add`, todo);
export const updateTodo = (id, updatedTodo) => axios.put(`${API_URL}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
