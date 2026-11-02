import { Link } from "react-router-dom";
import productos from "../data/productos";

function Home() {
  return (
    <div>
      <h2>Productos</h2>

      <nav className="menu">
        <Link to="/login">Login</Link>
        <Link to="/registro">Registrarse</Link>
      </nav>

      <div className="productos">
        {productos.map((producto) => (
          <div className="producto" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="precio">${producto.precio}</p>
            <Link to={"/producto/" + producto.id} className="boton">Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;