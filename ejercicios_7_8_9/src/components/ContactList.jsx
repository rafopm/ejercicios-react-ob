import { useDispatch, useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import Contacto from "./Contacto";
import { remover, actualizarEstado, agregar } from "../actions/contactActions";
import NoListContact from "./NoListContact";

import "../index.css";

function ContactList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const nameRef = useRef("");

  function addContact() {
    if (nameRef.current.value !== "") {
      const nombre = nameRef.current.value;
      dispatch(agregar(nombre));
      nameRef.current.value = "";
    } else {
      alert("Ingresa un nombre");
      document.getElementById("inputContact").focus();
    }
  }

  function deleteContact(item) {
    dispatch(remover(item));
  }

  function cambiarEstado(item) {
    dispatch(actualizarEstado(item));
  }

  return (
    <div className="contenedor" style={{ color: "black" }}>
      <div>
        <label id="contactsTitle" htmlFor="inputContact">
          <h4 className="text-monospace">Contactos:</h4>
        </label>
        <div className="input-group">
          <input
            ref={nameRef}
            id="inputContact"
            className="form-control"
            type="text"
            placeholder="Escribe el nombre..."
          />

          <div>
            <button className="button" onClick={addContact}>Add</button>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">En línea</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {state.contact.length > 0 ? (
              <>
                {state.contact.map((item, index) => {
                  return (
                    <Contacto
                      key={index}
                      item={item}
                      cambiaEstado={() => cambiarEstado(item)}
                      remove={() => deleteContact(item)}
                    ></Contacto>
                  );
                })}
              </>
            ) : (
              <tr>
                <td colSpan="2">
                  <NoListContact />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;
