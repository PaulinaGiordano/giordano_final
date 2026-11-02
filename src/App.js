import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detalle from './pages/detalle';
import Login from './pages/login';
import Registro from './pages/registro';

function App() {
  return (
    <HashRouter>
      <div className="contenedor">
        <h1>Mi tienda</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<Detalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;