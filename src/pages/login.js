function Login() {
  return (
    <div>
      <h2>Iniciar sesión</h2>

      <form className="formulario">
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="tumail@ejemplo.com" />
        </div>

        <div className="campo">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Tu contraseña" />
        </div>

        <button type="submit" className="boton">Entrar</button>
      </form>
    </div>
  );
}

export default Login;