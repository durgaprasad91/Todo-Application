// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteTodo, updateTodo } from '../actions/todoActions';
// import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material';

// const TodoItem = ({ todo }) => {
//   const dispatch = useDispatch();

//   const handleRemove = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleToggleComplete = (id, completed) => {
//     dispatch(updateTodo(id, { completed: !completed }));
//   };

//   return (
//     <ListItem>
//       <Checkbox
//         checked={todo.completed}
//         onChange={() => handleToggleComplete(todo.id, todo.completed)}
//       />
//       <ListItemText
//         primary={todo.todo}
//         style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
//       />
//       <ListItemSecondaryAction>
//         <IconButton edge="end" onClick={() => handleRemove(todo.id)}>
//           <DeleteIcon />
//         </IconButton>
//       </ListItemSecondaryAction>
//     </ListItem>
//   );
// };

// export default TodoItem;
