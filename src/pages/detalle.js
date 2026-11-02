import { useParams, Link } from "react-router-dom";
import productos from "../data/productos";

function Detalle() {
  const { id } = useParams();

  const producto = productos.find((p) => p.id === Number(id));

  if (!producto) {
    return (
      <div>
        <h2>Producto no encontrado</h2>
        <Link to="/">Volver al listado</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>

      <img src={producto.imagen} alt={producto.nombre} width="300" />

      <ul>
        <li><strong>Código:</strong> {producto.codigo}</li>
        <li><strong>Precio:</strong> ${producto.precio}</li>
        <li><strong>Stock:</strong> {producto.stock} unidades</li>
      </ul>

      <p>{producto.descripcion}</p>

      <Link to="/">Volver al listado</Link>
    </div>
  );
}

export default Detalle;
