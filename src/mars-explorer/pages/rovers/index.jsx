import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { actions, selectors } from "mars-explorer/ducks";

const Rovers = ({ fetch, fetching, rovers }) => {
  useEffect(fetch, [fetch]);

  return (
    <Fragment>
      {rovers.map(rover => (
        <div>
          <h2>
            Rover: <span>{rover.name}</span>
          </h2>
          <h3>
            status: <span>{rover.status}</span>
          </h3>
          <h4>
            Photos taken: <span>{rover.total_photos}</span>
          </h4>
        </div>
      ))}
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    fetching: selectors.rovers.fetching(state),
    rovers: selectors.rovers.all(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => {
      dispatch(actions.rovers.fetch.request());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rovers);
