function Registro(){
    return(
    <div>
      <h2>Crear Cuenta</h2>
      <form className="formulario">
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="tumail@ejemplo.com" />
        </div>
        <div className="campo">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="campo">
          <label htmlFor="password2">Repita la contraseña</label>
          <input type="password" id="password2" name="password2" />
        </div>
        <button type="submit" className="boton">Registrarme</button>
      </form>
    </div>
    )
}
export default Registro;