

const SignUp = () => {
  return (
    <div className="bg-bunker-body h-screen">
      <h1 className="font text-6xl">Iniciar sesión</h1>
      <form className="bg bg-white" action="submit" name="login" >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Contraseña
          <input name="password" type="password" />
        </label>
        <button>EN TER</button>
      </form>
    </div>
  )
}

export default SignUp