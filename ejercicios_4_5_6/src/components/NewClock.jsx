import React, { useEffect, useState } from "react";

const NewClock = () => {
  const [data, setData] = useState({
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  });

  function tick() {
    setData((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>
        Hora Actual: {data.fecha.toLocaleTimeString()}
      </h2>
      <h3>
         Nombres: {data.nombre} {data.apellidos}
      </h3>
      <h1>Edad: {data.edad}</h1>
    </div>
  );
};

export default NewClock;
