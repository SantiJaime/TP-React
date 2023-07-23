import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [filterNotice, setFilterNotice] = useState("general");
  const [notices, setNotices] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;

    setFilterNotice(value);
  };
  const getAllNotices = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${filterNotice}&language=en&apiKey=21cdd4bb73c84f6c89eb0ac77fec4ca2`
    );

    const res = await response.json();
    setNotices(res.articles);
  };

  useEffect(() => {
    getAllNotices();
  }, [getAllNotices]);

  return (
    <>
      <h1 className="text-center mt-3">Noticias</h1>
      <hr />
      <Container>
        <Form className="d-flex justify-content-around">
          <Form.Label>Seleccione la categoría</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="w-50"
            onChange={handleChange}
          >
            <option value="general">General</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="health">Salud</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnología</option>
          </Form.Select>
        </Form>
      </Container>
      <hr />
      <ListaNoticias notices={notices} />
    </>
  );
};

export default Formulario;
