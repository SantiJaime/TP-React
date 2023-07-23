import React, { useEffect, useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";

const Ej5 = () => {
  let tareasLS = JSON.parse(localStorage.getItem("tareas")) || [];
  const [tareas, setTareas] = useState(tareasLS);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const createTask = (event) => {
    const { value } = event.target;
    const { keyCode } = event;

    if (keyCode === 13) setTareas([...tareas, value]);
  };

  const deleteTask = (nameTask) => {
    let listaTareas = tareas.filter((item) => item !== nameTask);
    setTareas(listaTareas);
  };

  return (
    <>
      <section className="d-flex justify-content-center mt-5">
        <div className="border border-2 border-dark rounded-3 p-3 w-25">
          <h2 className="text-center">Bienvenido</h2>
          <hr />
          <h5 className="text-center">Ingrese sus tareas</h5>
          <input
            type="text"
            className="form-control my-4"
            placeholder="Ingrese una nueva tarea"
            onKeyDown={createTask}
          />
          <hr />
          {tareas.map((tarea, index) => (
            <div
              className="d-flex border border-2 border-secondary rounded-3 justify-content-between mt-2"
              key={index}
            >
              <p className="m-0 p-1 ms-1">
                {index + 1}. {tarea}
              </p>
              <CloseButton onClick={() => deleteTask(tarea)} className="p-2" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Ej5;
