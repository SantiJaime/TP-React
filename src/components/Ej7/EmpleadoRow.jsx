import React from "react";
import { Col, Row } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({ empleados }) => {
  return empleados.map((empleado) => (
    <Col
      lg={12}
      key={empleado.id}
      className="border border-2 border-black rounded-4 my-2"
    >
      <Row>
        <Col lg={2}>
          <EmpleadoAvatar empleadoImg={empleado.pic} />
        </Col>
        <Col lg={10}>
          <h3 className="mt-2">{empleado.fullName}</h3>
          <hr />
          <div className="d-flex justify-content-around">
            <h5>{empleado.title}</h5>
            <h5 className="bg-info p-2 rounded-1">{empleado.department}</h5>
          </div>
        </Col>
      </Row>
    </Col>
  ));
};

export default EmpleadoRow;
