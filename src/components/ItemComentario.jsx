import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ItemComentario({ texto, respuestas, comentarioId, setComentarios }) {
  const [textoRespuesta, setTextoRespuesta] = useState("");

  const handleInputRespuesta = (e) => {
    e.preventDefault();
    if (textoRespuesta !== "") {
      setComentarios((prevComentarios) => {
        const nuevosComentarios = prevComentarios.map((comentario) => {
          if (comentario.id === comentarioId) {
            return {
              ...comentario,
              respuestas: [
                ...comentario.respuestas,
                { idRespuesta: uuidv4(), respuesta: textoRespuesta },
              ],
            };
          }
          return comentario;
        });
        return nuevosComentarios;
      });

      setTextoRespuesta("");
    }
  };

  return (
    <div>
      <p>{texto}</p>
      <ul>
        {respuestas.map((respuesta) => (
          <li key={respuesta.idRespuesta}>{respuesta.respuesta}</li>
        ))}
      </ul>
      <form onSubmit={handleInputRespuesta}>
        <input
          value={textoRespuesta}
          type="text"
          onChange={(e) => setTextoRespuesta(e.target.value)}
        />
        <button type="submit">Enviar respuesta</button>
      </form>
    </div>
  );
}

export default ItemComentario;
