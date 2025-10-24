/**
 * HOME_TITLES
 *
 * Lista inmutable de títulos usados en la home.
 * Cada item tiene:
 * - title: texto mostrado.
 * - color: clase Tailwind para el color del título.
 *
 * Recomendaciones:
 * - Mantener las clases Tailwind aquí (consistencia).
 * - Marcar `as const` para obtener tipos literales y readonly.
 *
 * @example
 * // Obtener tipo y usar en componente
 * const title = HOME_TITLES[0].title; // "Decoration project"
 * const colorClass = HOME_TITLES[0].color; // "text-brand"
 */
export const HOME_TITLES = [
  { title: "Decoration project", color: "text-brand" },
  { title: "Special food", color: "text-red-800" },
  { title: "Activity for children", color: "text-blue-800" },
  { title: "Idea for your outfit", color: "text-amber-800" },
] as const;
