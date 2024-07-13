import {
  GET_ALL_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  API_FAILURE,
} from '../actions/todoActions';

const initialState = {
  todos: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TODOS_SUCCESS:
      return { ...state, todos: action.payload };
    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case API_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default todoReducer;
