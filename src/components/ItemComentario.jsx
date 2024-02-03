import { useState } from "react";

function ItemComentario({ texto, respuestas }) {
  const [textoRespuesta, setTextoRespuesta] = useState("");

  const handleTestoRespuesta = (e) => {
    setTextoRespuesta(e.target.value);
  };

  return (
    <>
      <h3>{texto}</h3>
      <ul>
        {respuestas.map((item) => {
          return (
            <>
              <li key={item.idRespuesta}>{item.respuesta}</li>
            </>
          );
        })}
      </ul>
      <form>
        <input onChange={handleTestoRespuesta} type="text" />
        <button>enviar respuesta</button>
        {textoRespuesta}
      </form>
    </>
  );
}

export default ItemComentario;
