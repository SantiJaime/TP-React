import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import ModalComp from "./ModalComp";

const CrudRecetas = () => {
  const recetasLS = JSON.parse(localStorage.getItem("recetas")) || [];
  const [recetas, setRecetas] = useState(recetasLS);

  const [formValues, setFormValues] = useState({
    nombre: "",
    img: "",
    descripcion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = () => {
    setRecetas([...recetas, formValues]);
    Swal.fire({
      icon: "success",
      title: "Receta publicada",
      showConfirmButton: false,
      timer: "1500",
    });
  };

  useEffect(() => {
    localStorage.setItem("recetas", JSON.stringify(recetas));
  }, [recetas]);

  const handleDelete = (nombreReceta) => {
    const filter = recetas.filter((receta) => receta.nombre !== nombreReceta);
    setRecetas(filter);
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-3">
          <h2>Cree sus recetas</h2>
          <Link className="btn btn-outline-primary" to={"/verrecetas"}>
            Ver recetas ya publicadas
          </Link>
        </div>
        <hr />
        <Form className="bg-gradient bg-primary p-3 rounded-3 text-white">
          <Form.Group className="mb-3" controlId="nameId">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="nombre"
              placeholder="Nombre de su receta"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imgId">
            <Form.Label>URL de la imagen</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="img"
              placeholder="URL"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descriptionId">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Pequeña descripción de su receta"
              onChange={handleChange}
              name="descripcion"
            />
          </Form.Group>
          <div className="text-end">
            <Button variant="outline-light" onClick={handleClick}>
              Publicar receta
            </Button>
          </div>
        </Form>
        <hr />
        <h2>Editar / Eliminar recetas</h2>
        <hr />
        {recetas.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">Nombre de la receta</th>
                <th className="text-center">Imagen de la receta</th>
                <th className="text-center">Descripción de la receta</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {recetas.map((receta, index) => (
                <tr key={index}>
                  <td>{receta.nombre}</td>
                  <td>{receta.img}</td>
                  <td>{receta.descripcion}</td>
                  <td className="text-center">
                    <ModalComp receta={receta} />
                    <Button
                      variant="danger"
                      className="my-1"
                      onClick={() => handleDelete(receta.nombre)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h3 className="text-center">Aún no hay recetas publicadas</h3>
        )}
      </Container>
    </>
  );
};

export default CrudRecetas;
