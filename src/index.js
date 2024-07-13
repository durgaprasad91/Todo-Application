import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';

// Lazy load the TodoList component
const TodoList = lazy(() => import('./components/TodoList.js'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList />
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
