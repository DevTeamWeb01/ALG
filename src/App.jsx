import Home from "./pages/home/Home";
import { Route, Routes } from 'react-router-dom'
import "./styles/App.css";
import Clientes from "./pages/clients/clients";
import Proveedores from "./pages/proveedores/proveedores";
import Personal from "./pages/personal/personal";
import Reporte from "./pages/reporte/reporte";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Ingreso general */}
        <Route path="/clientes" element={<Clientes />}/>
        <Route path="/proveedor" element={<Proveedores />}/>
        <Route path="/personal" element={<Personal />}/>
        <Route path="/reporte" element={<Reporte />}/>

        {/* Obras ejecucion */}

      </Routes>
    </>
  );
}

export default App;
