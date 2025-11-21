import type { FormEvent } from "react";

/**
 * readSearchQuery
 *
 * @description Función para leer y retornar la consulta de búsqueda desde un evento de formulario.
 *
 * @param event - Evento de formulario que contiene los datos de búsqueda.
 *
 * @remarks - Previene el comportamiento por defecto del formulario y extrae el valor del campo "query".
 *
 * @returns La consulta de búsqueda como una cadena de texto.
 */

export const readSearchQuery = (event: FormEvent<HTMLFormElement>): string => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  return (form.get("query") as string | null)?.trim() ?? "";
};
