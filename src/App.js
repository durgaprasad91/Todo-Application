import React from 'react';
import TodoList from './components/TodoList';
import { Container } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <TodoList />
    </Container>
  );
};

export default App;
