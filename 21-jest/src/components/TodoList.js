import React from "react";

const TodoList = ({ items }) => (
  <ul>
    {items.map(element => (
      <li key={element}>{element}</li>
    ))}
  </ul>
);

export default TodoList;
