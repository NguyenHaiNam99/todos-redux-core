import { connect } from "react-redux";
import ToDoList from "../components/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ToDoList);
