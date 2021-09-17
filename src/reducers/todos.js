const initialState = [];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      const { text, color } = action.payload;
      return [
        ...state,
        {
          id: nextTodoId(state),
          text,
          color,
          completed: false
        }
      ];
    }
    case "todos/todoToggled": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });
    }
    case "todos/colorSelected": {
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color
        };
      });
    }
    case "todos/todoDeleted": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "todos/allCompleted": {
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    }
    case "todos/completedCleared": {
      return state.filter((todo) => !todo.completed);
    }
    default:
      return state;
  }
}

export const filterOption = (todos, status, colors) => {
  let result;
  switch (status) {
    case "active":
      result = todos.filter((todo) => todo.completed === false);
      break;
    case "completed":
      result = todos.filter((todo) => todo.completed === true);
      break;
    default:
      result = todos;
      break;
  }
  if (colors.length > 0) {
    let resultFilterByColor = [];
    colors.map((color) => {
      const filterByColor = result.filter((todo) => todo.color === color);
      resultFilterByColor = [...resultFilterByColor, ...filterByColor];
      return resultFilterByColor;
    });
    return resultFilterByColor;
  }
  return result;
};
