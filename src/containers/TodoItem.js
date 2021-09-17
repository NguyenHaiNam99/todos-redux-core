import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import { todoToggled, colorSelected, todoDeleted } from "../actions/todos";

const mapDispatchToProps = {
  todoToggled,
  colorSelected,
  todoDeleted
};

export default connect(null, mapDispatchToProps)(TodoItem);
