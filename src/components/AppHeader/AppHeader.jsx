import { NewTaskForm } from "../../components";

import "./AppHeader.css";

export const AppHeader = ({ title }) => {
  return (
    <header className="header">
      <h1 className="app-title">{title}</h1>
      <NewTaskForm />
    </header>
  );
};
