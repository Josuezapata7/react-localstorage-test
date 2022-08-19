import { useState } from "react";

// Export sirve para exportar mi funcion a mi app.jsx
// Los props son funciones que pueden venir desde el app.jsx
export const TaskCreator = (props) => {
  //Variable para poder setear el nombre constantemente de un input
  const [newTaskName, setTaskName] = useState("");

  // Funcion para guardar datos en el local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className="col-9">
        <input
          type="text"
          placeholder="Enter a new Task"
          value={newTaskName}
          onChange={(e) => setTaskName(e.target.value)}
          className='form-control'
        />
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm">Save Task</button>
      </div>
    </form>
  );
};
