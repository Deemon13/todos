import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./Task.css";

export const Task = ({ description, created }) => {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">{description}</span>
        <span className="created">
          created {formatDistanceToNow(new Date())}
        </span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};
