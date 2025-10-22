Para un JSDoc breve y profesional en un componente típico de React, con 5–6 puntos alcanzás:

````js
/**
*Nombre + qué hace — 1 línea.
*
*Resumen técnico — 1–2 líneas de comportamiento clave.
*
*@param — si tiene props.
*
*@returns — JSX.Element o tipo de retorno.
*
*@example — 1–2 líneas mostrando uso real.
*
*@see — referencias a componentes/tipos relevantes (opcional, solo si aplica).
 *
 * ```

EJEMPLO:

```js
/**
 * ItemList
 *
 * Componente que renderiza una lista de elementos simples en un <ul>.
 *
 * @param {string[]} props.items - Array de strings a mostrar como elementos de la lista.
 * @returns {JSX.Element} - Elemento <ul> con cada item renderizado en un <li>.
 *
 * @example
 * ```tsx
 * <ItemList items={['Manzana', 'Banana', 'Naranja']} />
 * ```
 *
 * @see OrderedList
 * @see ListItem
 */

export const ItemList = ({ items }: { items: string[] }): JSX.Element => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};


```

````
