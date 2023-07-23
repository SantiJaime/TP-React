import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ListaNoticias = ({ notices }) => {
  return (
    <>
      <Container fluid>
        <Row>
          {notices.map((noticia, index) => (
            <Col lg={2} md={6} sm={12} key={index} className="my-2">
              <Card>
                <Card.Img variant="top" src={noticia.urlToImage} />
                <Card.Body>
                  <Card.Title>{noticia.title}</Card.Title>
                  <hr />
                  <Card.Text>{noticia.author}</Card.Text>
                  <Card.Text>{noticia.description}</Card.Text>
                  <a className="btn btn-success" href={noticia.url}>
                    Ver noticia completa
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListaNoticias;
