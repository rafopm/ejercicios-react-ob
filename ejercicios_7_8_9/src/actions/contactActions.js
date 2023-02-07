import { ADD, REMOVE, UPDATE_STATE } from "../types";

export const agregar = (value) => {
  return {
    type: ADD,
    contact:{
    name: value,
    isOnline: false,
    id: Date.now(),
    }
  };
};

export const remover = (id) => {
  return {
    type: REMOVE,
    id: id,
  };
};

export const actualizarEstado = (id) => {
  return {
    type: UPDATE_STATE,
    id: id,
  };
};
