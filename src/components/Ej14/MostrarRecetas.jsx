import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const MostrarRecetas = () => {
  const recetasLS = JSON.parse(localStorage.getItem("recetas")) || [];
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-3">
          <h2>Recetas publicadas</h2>
          <Link className="btn btn-info" to={"/crudrecetas"}>
            Crear / Editar / Eliminar receta
          </Link>
        </div>
        <hr />
        <Row>
          {recetasLS.length > 0 ? (
            recetasLS.map((receta, index) => (
              <Col key={index} lg={3} md={6} sm={12}>
                <Card>
                  <Card.Img className="img-fluid" src={receta.img} />
                  <Card.Body>
                    <Card.Title>{receta.nombre}</Card.Title>
                    <Card.Text>{receta.descripcion}</Card.Text>
                    <Button>Ver receta completa</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <h4 className="text-center">Aún no se publicas recetas</h4>
          )}
        </Row>
      </Container>
    </>
  );
};

export default MostrarRecetas;
