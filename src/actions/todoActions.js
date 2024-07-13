import {
  fetchTodos,
  addTodo as apiAddTodo,
  updateTodo as apiUpdateTodo,
  deleteTodo as apiDeleteTodo,
} from '../api.js';

export const GET_ALL_TODOS_SUCCESS = 'GET_ALL_TODOS_SUCCESS';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export const getAllTodos = () => async (dispatch) => {
  try {
    const response = await fetchTodos();
    dispatch({ type: GET_ALL_TODOS_SUCCESS, payload: response.data.todos });
  } catch (error) {
    console.error('Error fetching todos:', error);
    dispatch({ type: API_FAILURE, error });
  }
};

export const createTodo = (todo) => async (dispatch, getState) => {
  try {
    const response = await apiAddTodo(todo);
    const newTodo = { ...response.data, id: getState().todos.todos.length + 1 };
    dispatch({ type: ADD_TODO_SUCCESS, payload: newTodo });
  } catch (error) {
    console.error('Error creating todo:', error);
    dispatch({ type: API_FAILURE, error });
  }
};

export const updateTodo = (id, updates) => async (dispatch) => {
  try {
    const response = await apiUpdateTodo(id, updates);
    dispatch({ type: UPDATE_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error updating todo:', error);
    dispatch({ type: API_FAILURE, error });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await apiDeleteTodo(id);
    dispatch({ type: DELETE_TODO_SUCCESS, payload: id });
  } catch (error) {
    console.error('Error deleting todo:', error);
    dispatch({ type: API_FAILURE, error });
  }
};
