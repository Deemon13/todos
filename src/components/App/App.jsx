import { AppHeader, TaskList, Footer } from "../../components";

import "./App.css";

export const App = ({ todos, title }) => {
  return (
    <section className="todoapp">
      <AppHeader title={title} />
      <section className="main">
        <TaskList todos={todos} />
        <Footer />
      </section>
    </section>
  );
};
