import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../actions/todoActions';
import { Container, Typography, Button, TextField, Box, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  completed: {
    backgroundColor: 'lightgreen',
  },
  tableContainer: {
    maxHeight: 400,
  },
});

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [localTodos, setLocalTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('localTodos')) || [];
    setLocalTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('localTodos', JSON.stringify(localTodos));
  }, [localTodos]);

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return; 

    const allTodos = [...todos, ...localTodos];
    const maxId = allTodos.length ? Math.max(...allTodos.map(todo => todo.id)) : 0;
    const newId = maxId + 1;

    const newLocalTodo = {
      id: newId,
      todo: newTask,
      completed: false,
      userId: 1, 
    };

    setLocalTodos([...localTodos, newLocalTodo]);
    setNewTask('');
  };

  const handleToggleComplete = (id, currentCompletedState, isLocal) => {
    if (isLocal) {
      setLocalTodos(localTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !currentCompletedState } : todo
      ));
    } else {
      const updatedTodo = {
        completed: !currentCompletedState,
      };

      dispatch(updateTodo(id, updatedTodo));
    }
  };

  const handleDelete = (id, isLocal) => {
    if (isLocal) {
      setLocalTodos(localTodos.filter(todo => todo.id !== id));
    } else {
      dispatch(deleteTodo(id));
    }
  };

  const filteredTodos = [...todos, ...localTodos].filter(todo => {
    if (filter === 'pending') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true; 
    }
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <TextField
          label="Add New Task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTask();
          }}
        />
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleFilter('all')}
          style={{ marginRight: '10px' }}
        >
          All Tasks
        </Button>
        <Button
          variant={filter === 'pending' ? 'contained' : 'outlined'}
          color="secondary"
          onClick={() => handleFilter('pending')}
          style={{ marginRight: '10px' }}
        >
          Pending
        </Button>
        <Button
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          color="success"
          onClick={() => handleFilter('completed')}
        >
          Completed
        </Button>
      </Box>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTodos.map((todo) => (
              <TableRow key={todo.id} className={todo.completed ? classes.completed : ''}>
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.todo}</TableCell>
                <TableCell>{todo.completed ? 'Completed' : 'Pending'}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="toggle-complete"
                    onClick={() => handleToggleComplete(todo.id, todo.completed, localTodos.some(localTodo => localTodo.id === todo.id))}
                  >
                    {todo.completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(todo.id, localTodos.some(localTodo => localTodo.id === todo.id))}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TodoList;
