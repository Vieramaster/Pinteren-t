import type { FormEvent } from "react";

export const readSearchQuery = (event: FormEvent<HTMLFormElement>): string => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  return (form.get("query") as string | null)?.trim() ?? "";
};
