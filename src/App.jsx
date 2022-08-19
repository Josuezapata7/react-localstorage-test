import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./componets/taskCreator";
import { TaskTable } from "./componets/taskTable";
import { VisibilityControl } from "./componets/VisibilityControl";
import {Container} from "./componets/Container";

function App() {
  // Variable para poder setear nuevas tareas
  const [tasksItems, setTaskItems] = useState([]);
  // Variable pora poder mostrar una tabla con las tareas terminadas
  const [showCompleted, setShowCompleted] = useState(false);

  // Funcion para poder crear nuevas tareas
  function createNewTask(taskName) {
    // Si el nombre no existe deja agregar otra tarea, caso contrario no crea nada
    if (!tasksItems.find((task) => task.name === taskName)) {
      /* ...tasksItems significa que se va a crear otro arreglo con los mismos elementos que tenia anteriormente
      taskItems y se le va a agregar un nuevo objeto*/
      setTaskItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    // Busca la tarea por medio del nombre, si los encuentra pasa el arreglo a true y si no devuelve el mismo arreglo
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  /* Funcion que sirve al inicio de la aplicacion, esto para saber si existen datos en nuestro arreglo
  y si tiene datos los setea en el arreglo de setTaskItems */
  useEffect(() => {
    // Obtenemos los datos de nuestro arreglo en formato JS
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  /* Esta funcion sirve como un observador, la cual esta atenta al cambio de una variable, arreglo, etc
  y asi poder guardar un arreglo de mis tareas */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const cleanTask = () =>{

    setTaskItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }
  

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked)=> setShowCompleted(checked)}
          cleanTask={cleanTask}
        />

        {
          /*showCompleted && Es como un condicional , es como decir si showCompleted === true que pase lo
          siguiente*/
          showCompleted && (
            <TaskTable
              tasks={tasksItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
            />
          )
        }

      </Container>
    </main>
  );
}

export default App;
