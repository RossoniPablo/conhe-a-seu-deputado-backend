import type { Request, Response } from "express";

import {
  eventosDeputadoService,
  frentesDeputadoService,
  despesasDeputadoService,
  historicoMandatoDeputadoService,
  listarDeputadosService,
  ocupacoesDeputadoService,
  orgaosDeputadoService,
  perfilDeputadoService,
  profissoesDeputadoService,
  projetosDeputadoService,
} from "../service/deputados.service.js";
import { validarId } from "../utils/validarId.js";
import { parsePagination } from "../utils/paginacao.js";

export const listaDeputadosController = async (req: Request, res: Response) => {
  try {
    //apiResponse objeto completo da resposta do Axios
    const apiResponse = await listarDeputadosService();
    //.data é o deputado em si
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar deputados" });
  }
};

export const perfilDeputadoController = async (req: Request, res: Response) => {
  try {
    //{} quando quer pegar uma propriedade de um objeto
    const { id } = req.params;

    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }
    const apiResponse = await perfilDeputadoService(id);
    return res.json(apiResponse.data);
  } catch (error: any) {
    //response = resposta do erro
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar deputados" });
  }
};

export const despesasDeputadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { ano, mes } = req.query;
    const { pagina, itens } = parsePagination(req.query);

    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }
    const apiResponse = await despesasDeputadoService(
      id,
      ano ? Number(ano) : undefined,
      mes ? Number(mes) : undefined,
      pagina,
      itens,
    );
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar gastos" });
  }
};

export const projetosDeputadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { pagina, itens } = parsePagination(req.query);

    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const apiResponse = await projetosDeputadoService(id, pagina, itens);
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar projetos" });
  }
};

export const historicoMandatoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }
    const apiResponse = await historicoMandatoDeputadoService(id);
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar histórico" });
  }
};

export const profissoesDeputadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const apiResponse = await profissoesDeputadoService(id);
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar profissões" });
  }
};

export const orgaosDeputadoController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const apiResponse = await orgaosDeputadoService(id);
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar orgãos" });
  }
};

export const eventosDeputadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const { pagina, itens } = parsePagination(req.query);

    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const apiResponse = await eventosDeputadoService(id, pagina, itens);
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar eventos" });
  }
};

export const ocupacoesDeputadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const apiResponse = await ocupacoesDeputadoService(id);
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar ocupações" });
  }
};

export const frentesDeputadoController = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    if (!validarId(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const apiResponse = await frentesDeputadoService(id);
    return res.json(apiResponse.data);
  } catch (error: any) {
    if (error.response?.status === 404) {
      return res.status(404).json({ error: "Deputado não encontrado" });
    }
    return res.status(500).json({ error: "Erro ao buscar frentes" });
  }
};
