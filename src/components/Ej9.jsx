import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../css/Ej9.css";
const Ej9 = () => {
  let citasLS = JSON.parse(localStorage.getItem("citas")) || [];

  const [nuevaCita, setNuevaCita] = useState(citasLS);
  const [formValues, setFormValues] = useState({
    nombreMascota: "",
    nombreDueno: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = () => setNuevaCita([...nuevaCita, formValues]);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(nuevaCita));
  }, [nuevaCita]);

  const handleDelete = (nombreMascota) => {
    let citasActualizadas = nuevaCita.filter(
      (cita) => cita.nombreMascota !== nombreMascota
    );
    setNuevaCita(citasActualizadas);
  };
  return (
    <>
      <h2 className="text-center mt-3 mb-4">
        Administrar pacientes de veterinaria
      </h2>
      <Container className="sombra rounded-4">
        <hr />
        <h5>Llenar el formulario para crear una cita</h5>
        <Form className="cardColor py-4 rounded-4 mt-3">
          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="namePetId"
          >
            <Form.Label className="m-1">Nombre de mascota:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de su mascota"
              className="w-50 mx-2"
              onChange={handleChange}
              name="nombreMascota"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="nameId"
          >
            <Form.Label className="m-1">Nombre del dueño:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del dueño"
              className="w-50 mx-2"
              onChange={handleChange}
              name="nombreDueno"
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Form.Group className="mb-3 d-flex w-25" controlId="dateId">
              <Form.Label className="m-1">Fecha:</Form.Label>
              <Form.Control
                type="date"
                placeholder="dd/mm/yyyy"
                className="mx-2"
                onChange={handleChange}
                name="fecha"
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex w-25" controlId="timeId">
              <Form.Label className="m-1">Hora:</Form.Label>
              <Form.Control
                type="text"
                placeholder="00:00"
                className="mx-2"
                onChange={handleChange}
                name="hora"
              />
            </Form.Group>
          </div>
          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="sintomsId"
          >
            <Form.Label className="m-1">Síntomas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Describir síntomas"
              className="w-50 mx-2"
              onChange={handleChange}
              name="sintomas"
            />
          </Form.Group>
        </Form>
        <div className="text-center my-3">
          <Button
            variant="outline-primary"
            className="mb-3"
            onClick={handleClick}
          >
            Agregar nueva cita
          </Button>
        </div>
      </Container>
      <Container className="mt-5 sombra rounded-4">
        {nuevaCita.length > 0 ? (
          <>
            <h5 className="text-center pt-3">Administrar las citas</h5>
            <hr />
            <Row>
              {nuevaCita.map((cita, index) => (
                <Col key={index} lg={3} md={6} sm={12} className="my-2">
                  <Card style={{ width: "20rem" }}>
                    <Card.Body className="p-0">
                      <Card.Title className="ps-3 pt-3">
                        Mascota: {cita.nombreMascota}
                      </Card.Title>
                      <Card.Text className="ps-3">
                        Dueño: {cita.nombreDueno}
                      </Card.Text>
                      <div className="cardColor p-3">
                        <Card.Text>Fecha: {cita.fecha}</Card.Text>
                        <Card.Text>Hora: {cita.hora}</Card.Text>
                        <Card.Text>Síntomas: {cita.sintomas}</Card.Text>
                      </div>
                      <div className="text-end m-2">
                        <Button
                          variant="outline-danger"
                          onClick={() => handleDelete(cita.nombreMascota)}
                        >
                          Borrar cita
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <h5 className="text-center p-3">No hay citas</h5>
        )}
      </Container>
    </>
  );
};

export default Ej9;
