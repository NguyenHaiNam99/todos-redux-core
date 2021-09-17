import { connect } from "react-redux";
import { todoAdded } from "../actions/todos";
import Header from "../components/Header";

// const mapDispatchToProps = dispatch => {
//   return {
//     todoAdded: (text) => dispatch(todoAdded(text))
//   }
// }

const mapDispatchToProps = {
  todoAdded
};

export default connect(null, mapDispatchToProps)(Header);
