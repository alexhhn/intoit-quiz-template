import { connect } from "react-redux";
import Home from "./Home";
import { fetchSubjects } from "../../ducks/subjects";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSubjects: () => dispatch(fetchSubjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
