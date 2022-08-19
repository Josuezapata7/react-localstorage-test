//Funcion para poder agregar filas a una tabla con mis tareas
export const TaskRow = ({task,toggleTask}) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  );
};
