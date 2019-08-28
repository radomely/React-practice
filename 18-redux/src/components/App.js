import React, { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

// TODO useContext
// import AuthManager from './AuthManager';

// TODO useCallback
// import OptimizedCounter from 'OptimizedCounter';

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

// const Header = styled.header`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 24px;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   padding-left: 16px;
//   padding-right: 16px;
//   border-bottom: 1px solid #212121;
// `;

/*TODO
 * use state для формы
 * use state для todos
 * use reducer для todos
 * use dtate для модалки
 */

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const todo = { id: shortid.generate(), text };
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== todoId));
  };
  return (
    <Container>
      {/*<Header>
          <button>Open modal</button>
          <AuthManager />
        </Header>*/}
      <button onClick={increment}>{count}</button>
      <TodoEditor onSave={addTodo} />
      {todos.length > 0 && <TodoList items={todos} onDeleteTodo={deleteTodo} />}
    </Container>
  );
};

export default App;
