import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Swal from "sweetalert2";
import "../css/Ej9.css";

const Ej10 = () => {
  let moviesLS = JSON.parse(localStorage.getItem("movies")) || [];

  const [movies, setMovies] = useState(moviesLS);
  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
    genero: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };
  const handleClick = () => {
    const { nombre, descripcion, genero } = formValues;

    if (!nombre || !descripcion || !genero) {
      Swal.fire({
        icon: "error",
        title: "Formulario incompleto",
        text: "Completa los campos vacíos",
      });
    } else {
      setMovies([...movies, formValues]);
      Swal.fire({
        icon: "success",
        title: "Película registrada",
        showConfirmButton: false,
        timer: "1500",
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleDelete = (name) => {
    let moviesFilter = movies.filter((movie) => movie.nombre !== name);
    setMovies(moviesFilter);
  };
  return (
    <>
      <Container className="my-5 d-flex justify-content-center">
        <Form className="bg-gradient bg-danger text-white p-4 rounded-4 w-75 sombra">
          <Form.Group className="mb-3" controlId="nameId">
            <Form.Label>Nombre de la película</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="nombre"
              type="text"
              placeholder="Nombre de la película"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descriptionId">
            <Form.Label>Descripción de la película</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="descripcion"
              as="textarea"
              rows={3}
              placeholder="Pequeña descripción de la película"
            />
          </Form.Group>
          <Form.Label>Género de la película</Form.Label>
          <Form.Select
            onChange={handleChange}
            name="genero"
            aria-label="Default select example"
          >
            <option>Sin especificar género</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
          </Form.Select>
          <div className="text-end">
            <Button
              onClick={handleClick}
              className="mt-3"
              variant="outline-light"
            >
              Registrar película
            </Button>
          </div>
        </Form>
      </Container>
      <Container>
        <hr />
        {movies.length > 0 ? (
          <Row>
            {movies.map((movie, index) => (
              <Col key={index} lg={3} md={6} sm={12}>
                <Card>
                  <Card.Body>
                    <Card.Title>{movie.nombre}</Card.Title>
                    <hr />
                    <Card.Text>Género: {movie.genero}</Card.Text>
                    <Card.Text>Sinopsis: {movie.descripcion}</Card.Text>
                    <hr />
                    <Button
                      variant="outline-danger"
                      onClick={() => handleDelete(movie.nombre)}
                    >
                      Borrar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <h4 className="text-center">No hay películas registradas</h4>
        )}
      </Container>
    </>
  );
};

export default Ej10;
