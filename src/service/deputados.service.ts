import { camaraApi } from "./camaraApi";

export const listarDeputadosService = async () => {
  return camaraApi.get("/deputados");
};

export const perfilDeputadoService = async (id: string) => {
  return camaraApi.get(`/deputados/${id}`);
};

export const despesasDeputadoService = async (
  id: string,
  ano?: number,
  mes?: number,
  pagina = 1,
  itens = 50,
) => {
  return camaraApi.get(`/deputados/${id}/despesas`, {
    params: { ano, mes, pagina, itens },
  });
};

export const projetosDeputadoService = async (
  id: string,
  pagina = 1,
  itens = 50,
) => {
  return camaraApi.get(`/proposicoes`, {
    params: {
      idDeputadoAutor: id,
      pagina,
      itens,
    },
  });
};

export const historicoMandatoDeputadoService = async (id: string) => {
  return camaraApi.get(`/deputados/${id}/historico`);
};
export const profissoesDeputadoService = async (id: string) => {
  return camaraApi.get(`/deputados/${id}/profissoes`);
};

export const orgaosDeputadoService = async (id: string) => {
  return camaraApi.get(`/deputados/${id}/orgaos`);
};

export const eventosDeputadoService = async (
  id: string,
  pagina = 1,
  itens = 50,
) => {
  return camaraApi.get(`/deputados/${id}/eventos`, {
    params: { pagina, itens },
  });
};

export const ocupacoesDeputadoService = async (id: string) => {
  return camaraApi.get(`/deputados/${id}/ocupacoes`);
};

export const frentesDeputadoService = async (id: string) => {
  return camaraApi.get(`/deputados/${id}/frentes`);
};
