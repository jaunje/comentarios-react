import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Comentario() {
  const [comentarios, setComentarios] = useState([
    { id: uuidv4(), texto: "comentario 1" },
    { id: uuidv4(), texto: "comentario 2" },
  ]);

  const [texto, setTexto] = useState("");

  const handleInput = (e) => {
    setTexto(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    setTexto("");
    setComentarios([...comentarios, { id: uuidv4(), texto }]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={texto} type="text" onChange={handleInput} />
        <button type="submit">Enviar comentario</button>
      </form>
      {texto}
      {comentarios.map((item) => {
        return (
          <li key={item.id}>
            {item.id} - {item.texto}
          </li>
        );
      })}
    </>
  );
}

export default Comentario;
