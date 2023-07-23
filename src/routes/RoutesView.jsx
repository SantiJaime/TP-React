import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Ejercicio1 from "../pages/Ejercicio1";
import NavbarComp from "../components/NavbarComp";
import Ejercicio2 from "../pages/Ejercicio2";
import Ejercicio3 from "../pages/Ejercicio3";
import Ejercicio4 from "../pages/Ejercicio4";
import Ejercicio5 from "../pages/Ejercicio5";
import Ejercicio6 from "../pages/Ejercicio6";
import Ejercicio7 from "../pages/Ejercicio7";
import Ejercicio8 from "../pages/Ejercicio8";
import Ejercicio9 from "../pages/Ejercicio9";
import Ejercicio10 from "../pages/Ejercicio10";
import Ejercicio11 from "../pages/Ejercicio11";
import Ejercicio12 from "../pages/Ejercicio12";
import Ejercicio13 from "../pages/Ejercicio13";
import Ejercicio14 from "../pages/Ejercicio14";
import CrudRecetas from "../components/Ej14/CrudRecetas";
import MostrarRecetas from "../components/Ej14/MostrarRecetas";

const RoutesView = () => {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ej1" element={<Ejercicio1 />} />
        <Route path="/ej2" element={<Ejercicio2 />} />
        <Route path="/ej3" element={<Ejercicio3 />} />
        <Route path="/ej4" element={<Ejercicio4 />} />
        <Route path="/ej5" element={<Ejercicio5 />} />
        <Route path="/ej6" element={<Ejercicio6 />} />
        <Route path="/ej7" element={<Ejercicio7 />} />
        <Route path="/ej8" element={<Ejercicio8 />} />
        <Route path="/ej9" element={<Ejercicio9 />} />
        <Route path="/ej10" element={<Ejercicio10 />} />
        <Route path="/ej11" element={<Ejercicio11 />} />
        <Route path="/ej12" element={<Ejercicio12 />} />
        <Route path="/ej13" element={<Ejercicio13 />} />
        <Route path="/ej14" element={<Ejercicio14 />} />
        <Route path="/crudrecetas" element={<CrudRecetas />} />
        <Route path="/verrecetas" element={<MostrarRecetas />} />
      </Routes>
    </>
  );
};

export default RoutesView;
