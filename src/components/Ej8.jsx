import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Ej8 = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    nombre: "",
    apellido: "",
    dni: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };
  const handleClick = () => {
    const { email, nombre, apellido, dni } = formValues;

    if (!email || !nombre || !apellido || !dni) {
      Swal.fire({
        icon: "error",
        title: "Formulario incompleto",
        text: "Completa los campos vacíos",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        text: `Datos del usuario: Email: ${email} | Nombre: ${nombre} | Apellido: ${apellido} | DNI: ${dni}`,
      });
    }
  };
  return (
    <div className="container mt-5 bg-gradient bg-success rounded-5 p-4">
      <h3>Formulario</h3>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="emailId">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="nameId">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            onChange={handleChange}
            placeholder="Su nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apId">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            onChange={handleChange}
            placeholder="Su apellido"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dniId">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            name="dni"
            onChange={handleChange}
            placeholder="123456879"
          />
        </Form.Group>
        <Button variant="outline-light" onClick={handleClick}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Ej8;
