export const validarId = (id: unknown): id is string => {
  return typeof id === "string" && !isNaN(Number(id));
};
