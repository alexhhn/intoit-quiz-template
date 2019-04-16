import { connect } from "react-redux";
import Home from "./Home";
import { addTodo } from "../../ducks/subjects";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: () => dispatch(addTodo("DO THIS"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
