import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalComp = ({ receta }) => {
  const recetasLS = JSON.parse(localStorage.getItem("recetas")) || [];

  const recetaIndex = recetasLS.findIndex(
    (recipe) => recipe.nombre === receta.nombre
  );

  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre: "",
    img: "",
    descripcion: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = () => {
    if(formValues.nombre) recetasLS[recetaIndex].nombre = formValues.nombre;
    if(formValues.img) recetasLS[recetaIndex].img = formValues.img;
    if(formValues.descripcion) recetasLS[recetaIndex].descripcion = formValues.descripcion;

    localStorage.setItem("recetas", JSON.stringify(recetasLS));

    setShow(false);
  };
  return (
    <>
      <Button variant="success" className="my-1" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edite su receta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nameId">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                onChange={handleChange}
                placeholder={receta.nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="priceId">
              <Form.Label>URL de la imagen</Form.Label>
              <Form.Control
                type="text"
                name="img"
                onChange={handleChange}
                placeholder={receta.img}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descriptionId">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion"
                onChange={handleChange}
                placeholder={receta.descripcion}
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClick}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;
