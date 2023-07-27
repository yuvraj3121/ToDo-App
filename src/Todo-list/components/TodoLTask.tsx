interface Task {
  id: number;
  task: string;
}

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
}

const TodoLTask = ({ tasks, onDelete }: Props) => {
  return (
    <div className="con">
      <table className="table table-bordered table-hover table-info">
        <thead>
          <tr>
            <td width="90%">Task</td>

            <td></td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr>
              <td>{task.task}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(task.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoLTask;
