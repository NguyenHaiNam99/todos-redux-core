import React from "react";
import TodoListItem from "../containers/TodoItem";
import { filterOption } from "../reducers/todos";

const TodoList = ({ todos, filters }) => {
  const { colors, status } = filters;
  let result = filterOption(todos, status, colors);

  const renderedListItems = result.map((todo) => {
    return (
      <TodoListItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        color={todo.color}
      />
    );
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
