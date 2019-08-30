import React, { useState, useEffect } from "react";
import styled from "styled-components";
import shortid from "shortid";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import Modal from "./Modal";

// TODO useContext
import AuthManager from "./AuthManager";

// TODO useCallback
import OptimizedCounter from "./OptimizedCounter";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid #212121;
`;

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
  /*
   *TODO
   */
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const todo = { id: shortid.generate(), text };
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== todoId));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log("UseEffect" + Date.now());
  }, []);

  /*
   *MODAL
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <button onClick={openModal}>Open modal</button>
        <AuthManager />
      </Header>
      <hr />
      <OptimizedCounter />
      <hr />
      <button onClick={increment}>{count}</button>
      <TodoEditor onSave={addTodo} />
      {todos.length > 0 && <TodoList items={todos} onDeleteTodo={deleteTodo} />}
      {isModalOpen && <Modal onClose={closeModal} />}
    </Container>
  );
};

export default App;
