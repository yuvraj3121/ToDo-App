import { useState } from "react";
import TodoLTask from "./Todo-list/components/TodoLTask";
import Todoinput from "./Todo-list/components/Todoinput";
import TodoNavbar from "./Todo-list/components/TodoNavbar";

function App() {
  const [task, setTask] = useState([{ id: 0, task: "" }]);

  return (
    <>
      <TodoNavbar />
      <div className="maincon">
        <div className="mb-5">
          <Todoinput
            submit={(t) => setTask([...task, { ...t, id: task.length + 1 }])}
          />
        </div>
        <div className="mb-3">
          <TodoLTask
            tasks={task}
            onDelete={(id) => setTask(task.filter((t) => t.id != id))}
          />
        </div>
      </div>
    </>
  );
}

export default App;
