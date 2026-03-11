import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar/Navbar";
import Inicio from "./pages/Inicio/Inicio";
import SobreMi from "./pages/SobreMi/sobreMi";
import Proyectos from "./pages/Proyectos/Proyectos";
import Habilidades from "./pages/Habilidades/Habilidades";
import Contacto from "./pages/Contacto/Contacto";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;