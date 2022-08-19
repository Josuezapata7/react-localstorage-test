import { TaskRow } from "./taskRow";

// Funcion para poder tener una tabla con todas mis tareas
export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  // Funcion para poder agregar tablas
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        //Funcion para poder agregar filas a mi tabla con mis tareas
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-stripped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Taks</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
