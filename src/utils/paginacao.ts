export const parsePagination = (query: any, defaultItens = 50) => {
  const pagina = Number(query.pagina);
  const itens = Number(query.itens);

  return {
    pagina: !isNaN(pagina) && pagina > 0 ? pagina : 1,
    itens: !isNaN(itens) && itens > 0 ? itens : defaultItens,
  };
};
