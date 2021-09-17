export const todoAdded = (text, color) => {
  return {
    type: "todos/todoAdded",
    payload: { text, color }
  };
};

export const todoToggled = (id) => {
  return {
    type: "todos/todoToggled",
    payload: id
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: "todos/colorSelected",
    payload: { todoId, color }
  };
};

export const todoDeleted = (id) => {
  return {
    type: "todos/todoDeleted",
    payload: id
  };
};

export const allCompleted = () => {
  return {
    type: "todos/allCompleted"
  };
};

export const completedCleared = () => {
  return {
    type: "todos/completedCleared"
  };
};
