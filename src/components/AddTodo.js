
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../actions/todoActions';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch(createTodo({
        todo,
        completed: false,
        userId: 1,
      }));
      setTodo('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="New Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </Box>
  );
};

export default AddTodo;
