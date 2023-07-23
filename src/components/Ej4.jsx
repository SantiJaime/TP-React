import React, { useEffect, useState } from "react";

const Ej4 = ({ array }) => {
  const [tareas, setTarea] = useState(array);

  const inputFunction = (event) => {
    const { value } = event.target;

    if (event.keyCode === 13) setTarea([...tareas, value]);
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
            placeholder="Tarea X"
            onKeyDown={inputFunction}
          />
          <hr />
          {tareas.map((tarea, index) => (
            <p
              key={index}
              className="border border-2 border-secondary rounded-3 p-1 ps-2"
            >
              {index + 1}. {tarea}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Ej4;
