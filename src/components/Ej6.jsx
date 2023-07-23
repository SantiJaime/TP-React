import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Ej6 = () => {
  let colorsLS = JSON.parse(localStorage.getItem("colors")) || [];

  const [colors, setColors] = useState(colorsLS);
  const [newColor, setNewColor] = useState("#000");

  const handleSubmit = (event) => {
    event.preventDefault();

    setColors([...colors, newColor]);
  };
  const handleChange = (event) => {
    const { value } = event.target;

    setNewColor(value);
  };
  const deleteColor = (nameColor) => {
    let filtro = colors.filter((color) => color !== nameColor);
    setColors(filtro);
  };

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  return (
    <Container fluid>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="m-3 border border-2 border-black rounded-3 p-2"
            controlId="colorId"
          >
            <Form.Label>Seleccione el color</Form.Label>
            <hr />
            <div className="d-flex justify-content-between">
              <Form.Control
                type="color"
                onChange={handleChange}
                className="w-50"
              />
              <Button className="mt-2" type="submit" variant="outline-primary">
                Agregar
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Container>
      <Row>
        {colors.length > 0
          ? colors.map((color, index) => (
              <Col lg={3} md={6} sm={12} key={index} className="my-2">
                <Card>
                  <Card.Body>
                    <Card.Title>{color}</Card.Title>
                    <hr />
                    <div
                      style={{
                        backgroundColor: color,
                        width: "100%",
                        height: "50px",
                        borderRadius: 10,
                      }}
                    ></div>
                    <Button
                      variant="outline-danger"
                      className="mt-3"
                      onClick={() => deleteColor(color)}
                    >
                      Borrar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : ""}
      </Row>
    </Container>
  );
};

export default Ej6;
