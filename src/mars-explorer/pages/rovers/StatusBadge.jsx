import styled from "styled-components";

const StatusBadge = styled.span.attrs(({ children }) => ({
  style: { backgroundColor: children === "active" ? "green" : "red" }
}))`
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
`;

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
