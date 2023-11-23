import styled from "styled-components";
import { CardTop } from "./CardTop";
import { CardContent } from "./CardContent";
import { CardBottom } from "./CardBottom";

const CardWrapper = styled.div.attrs((props) => ({
  className: props.className || "",
}))`
  background-color: var(--clr-primary-light);
  min-width: 375px;
  min-height: 228px;
  border-radius: var(--border-radius-large);
  margin: 15px 0;
  padding: var(--general-smaller-padding);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TaskCard = ({ task }) => {
  return (
    <CardWrapper key={task.id} className="card_wrapper">
      <CardTop cats={task.categories} id={task.id} />
      <CardContent
        title={task.title}
        due_date={task.due_date}
        text={task.content}
        completed={task.completed}
        id={task.id}
      />
      <CardBottom created_at={task.created_at} id={task.id} />
    </CardWrapper>
  );
};
