import { useState } from "react";
import Card from "./Card"
import style from "../src/app.module.css"
function App() {
  const [user, setUser] = useState({
    nombre: "",
    color: "",
  });

  const [visibility, setVisibility] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^(?!\s).{3,}/.test(e.target.nombre.value) && user.color.length >6) {
      setVisibility(true);
      setErr(false);
    } else {
      setErr(true);
      setVisibility(false)
    }

    console.log(user);
  };

  return (
    <div className={style.app}>
      <div className={style.container}>

      <h1 className={style.titulo}>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre"
          onBlur={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        {err && <p className={style.error}>El nombre debe tener al menos 3 caracteres y no comenzar con espacios en blanco.</p>}
        <input
          type="text"
          id="color"
          placeholder="¿Cuál es tu color favorito?"
          onBlur={(e) => setUser({ ...user, color: e.target.value })}
        />
        {err && <p className={style.error}>Color debe tener 6 caracteres como minimo y estar en formato HSL</p>}

        <div className={style.containerButton}>
        <button type="submit">Enviar</button>

        </div>
      </form>
    </div>
    {visibility && <Card props={{ nombre: user.nombre, color: user.color }} />}

      </div>
      
  );
}

export default App;

