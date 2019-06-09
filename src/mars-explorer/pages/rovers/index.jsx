import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { actions, selectors } from "mars-explorer/ducks";
import RoversListItem from "mars-explorer/pages/rovers/RoversListItem";

const Rovers = ({ fetch, fetching, rovers, onClick }) => {
  useEffect(fetch, [fetch]);

  return (
    <Fragment>
      <ul>
        {rovers.map(rover => (
          <RoversListItem
            key={rover.id}
            {...rover}
            onClick={() => onClick(rover)}
          />
        ))}
      </ul>
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
    onClick: rover => {
      console.log(rover);
    },
    fetch: () => {
      dispatch(actions.rovers.fetch.request());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rovers);
