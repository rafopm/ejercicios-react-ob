import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


function Contacto({ item, cambiaEstado, remove }) {
  function isOnline() {
    if (item.isOnline) {
      return (
        <i
          onClick={() => cambiaEstado(item)}
          className="bi-toggle-on iconCambiaEstado"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => cambiaEstado(item)}
          className="bi-toggle-off iconCambiaEstado"
          style={{ color: "grey" }}
        ></i>
      );
    }
  }

  return (
    <tr>
      <th>
        <span>{item.name}</span>
      </th>
      <td>
        <span>{isOnline()}</span>
      </td>
      <td>
     
        <i
        id="idRemove"
          className="bi-trash iconDelete"
          style={{ color: "tomato" }}
          onClick={() => remove(item)}
        ></i>
       
      </td>
    </tr>
  );
}

export default Contacto;
