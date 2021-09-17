import { connect } from "react-redux";
import { statusFilterChanged, colorFilterChanged } from "../actions/filters";
import { allCompleted, completedCleared } from "../actions/todos";
import Footer from "../components/Footer";

const mapDispatchToProps = {
  statusFilterChanged,
  colorFilterChanged,
  allCompleted,
  completedCleared
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filters: state.filters
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
