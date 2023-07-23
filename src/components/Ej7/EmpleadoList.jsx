import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
  ];
  return (
    <>
      <Container>
        <Row>
          <EmpleadoRow empleados={empleados} />
        </Row>
      </Container>
    </>
  );
};

export default EmpleadoList;
