import React, { useState } from "react";

const Ej3 = (props) => {
  const { mensaje } = props;

  const [msj, setMsj] = useState(mensaje);

  const buttonFunction = () => {
    if (msj === mensaje) setMsj("Hello my friend (from changed state)!");
    else setMsj(mensaje);
  };

  return (
    <>
      <div className="m-3">
        <h1>{msj}</h1>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={buttonFunction}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default Ej3;
