import React, { useState } from "react";

export default function Tracker() {
  let [dias, setDias] = useState([
    { id: "Lun", dia: "Lunes", estado: false },
    { id: "Mar", dia: "Martes", estado: false },
    { id: "Mie", dia: "Miercoles", estado: false },
    { id: "Jue", dia: "Jueves", estado: false },
    { id: "Vie", dia: "Viernes", estado: false },
    { id: "Sab", dia: "Sabado", estado: false },
    { id: "Dom", dia: "Domingo", estado: false },
  ]);

  let [count, setCount] = useState(0);

  function aumentoContador() {
    setCount(count + 1);
  }

  function disminuirContador() {
    setCount(count - 1);
  }
  function completa(id) {
    let nueva = dias.map((dia) => {
      if (dia.id === id) return { ...dia, estado: !dia.estado };
      else return dia;
    });
    setDias(nueva);
  }

  let [text, setText] = useState("");
  return (
    <div className="container">
      <h2>Habitos por obtener</h2>
      <input
        type="text"
        placeholder="Ingrese su nuevo habito"
        onChange={(e) => setText(e.target.value)}
      />
      {dias.map((dia) => (
        <div key={dia.id}>
          <h4>{dia.dia}</h4>
          <h3></h3>
          <button
            onClick={() => {
              completa(dia.id);
              if (dia.estado) {
                disminuirContador();
              } else {
                aumentoContador();
              }
            }}
          >
            {dia.estado ? "Completada" : "Pendiente"}
          </button>
        </div>
      ))}
      <h3>
        Lograste {text} un total de: {count} dias.
      </h3>
    </div>
  );
}
