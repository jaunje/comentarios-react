import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ItemComentario from "./ItemComentario";

function Comentario() {
  const [comentarios, setComentarios] = useState([
    {
      id: uuidv4(),
      texto: "comentario 1",
      respuestas: [
        { idRespuesta: uuidv4(), respuesta: "respuesta1" },
        { idRespuesta: uuidv4(), respuesta: "respuesta2" },
      ],
    },
    {
      id: uuidv4(),
      texto: "comentario 2",
      respuestas: [
        { idRespuesta: uuidv4(), respuesta: "respuesta3" },
        { idRespuesta: uuidv4(), respuesta: "respuesta4" },
      ],
    },
  ]);

  const [texto, setTexto] = useState("");
  const handleInput = (e) => {
    setTexto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (texto != "") {
      setTexto("");

      setComentarios([...comentarios, { id: uuidv4(), texto, respuestas: [] }]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={texto} type="text" onChange={handleInput} />
        <button type="submit">Enviar comentario</button>
      </form>
      {texto}
      <ul>
        {comentarios.map((item) => {
          return (
            <li key={item.id}>
              <ItemComentario texto={item.texto} respuestas={item.respuestas} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comentario;
