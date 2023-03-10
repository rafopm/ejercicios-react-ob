import React, { useState } from "react";

const Conctact = (props) => {
  const [contact, setContact] = useState({
    nombre: props.nombre,
    apellido: props.apellido,
    email: props.email,
    conectado: props.conectado,
  });

  const cambiarEstado = () => {
    let estado = contact.conectado;
    setContact({ ...contact, conectado: !estado });
  };

  return (
    <div>
      <div>Nombre: {contact.nombre}</div>
      <div>Apellido: {contact.apellido}</div>
      <div>Email: {contact.email}</div>
      <div className="estado">
        <p>
          <span>Contacto </span>
          {contact.conectado === false ? (
            <>
              <span className="desconectado" />
              No disponible
            </>
          ) : (
            <>
              <span className="conectado" />
              En línea
            </>
          )}
        </p>
      </div>
      <button onClick={cambiarEstado}>Cambiar Estado</button>
    </div>
  );
};

export default Conctact;
