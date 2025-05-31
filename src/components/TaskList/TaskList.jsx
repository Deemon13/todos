import { Task } from "../../components";

import "./TaskList.css";

export const TaskList = ({ todos }) => {
  const tasks = todos.map((task) => {
    const { id, status, ...taskProps } = task;
    return (
      <li key={id} className={status ? status : ""}>
        <Task {...taskProps} />
        {status === "editing" && (
          <input type="text" className="edit" defaultValue="Editing task" />
        )}
      </li>
    );
  });

  return <ul className="todo-list">{tasks}</ul>;
};
