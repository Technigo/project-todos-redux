import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../reducers/task/taskSlice";
import { format } from "date-fns";

const Bottom = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`;

const CreatedAt = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  margin-bottom: 0;
  color: var(--clr-grey-5);
  font-size: 0.8em;
`;

const RemoveCard = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  cursor: pointer;
`;

export const CardBottom = ({ created_at, id }) => {
  const dispatch = useDispatch();
  const formattedDate = format(created_at, "yyyy-MM-dd");

  return (
    <Bottom className="bottom">
      <CreatedAt className="created_at">Created: {formattedDate}</CreatedAt>
      <RemoveCard onClick={() => dispatch(removeTask(id))}>🗑️</RemoveCard>
    </Bottom>
  );
};
