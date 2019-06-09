import React from "react";
import styled from "styled-components";
import moment from "moment";

import StatusBadge from "mars-explorer/pages/rovers/StatusBadge";

const ProfileRow = styled.li`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "photo heading" "photo info";
  cursor: pointer;
  padding: 1rem;
  gap: 0 1rem;

  :hover {
    background-color: lightgrey;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: heading;
  font-weight: bold;
`;
const Body = styled.p`
  grid-area: info;
  line-height: 1.5rem;
`;
const Photo = styled.div`
  place-self: center;
  grid-area: photo;
`;

const RoversListItem = ({
  name,
  status,
  total_photos,
  landing_date,
  max_sol,
  onClick
}) => (
  <ProfileRow onClick={onClick}>
    <Photo>photo</Photo>
    <Heading>
      <span>{name}</span>
      <StatusBadge>{status}</StatusBadge>
    </Heading>
    <Body>
      Landed <span>{moment(landing_date).fromNow()}</span>.<br />
      Captured <span>{total_photos.toLocaleString()}</span> photos.
      <br />
      Saw <span>{max_sol.toLocaleString()}</span> suns.
      <br />
    </Body>
  </ProfileRow>
);

export default RoversListItem;
