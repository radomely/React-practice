import React, { Component } from "react";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

export default class App extends Component {
  state = {
    todos: []
  };

  saveTodo = todo => {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  };

  render() {
    return (
      <div className="App">
        <span>wreerw</span>
        <TodoEditor onSave={this.saveTodo} />
        <TodoList items={this.state.todos} />
        <span>qweqwe</span>
        {/* {this.state.todos.length > 0 && <TodoList items={this.state.todos} />} */}
      </div>
    );
  }
}
