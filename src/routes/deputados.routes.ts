import { Router } from "express";
import {
  eventosDeputadoController,
  frentesDeputadoController,
  despesasDeputadoController,
  historicoMandatoController,
  listaDeputadosController,
  ocupacoesDeputadoController,
  orgaosDeputadoController,
  profissoesDeputadoController,
  projetosDeputadoController,
} from "../controllers/deputados.controller";
import { perfilDeputadoController } from "../controllers/deputados.controller";

const router = Router();

router.get("/", listaDeputadosController);
router.get("/:id", perfilDeputadoController);
router.get("/:id/despesas", despesasDeputadoController);
router.get("/:id/proposicoes", projetosDeputadoController);
router.get("/:id/historico", historicoMandatoController);
router.get("/:id/profissoes", profissoesDeputadoController);
router.get("/:id/orgaos", orgaosDeputadoController);
router.get("/:id/eventos", eventosDeputadoController);
router.get("/:id/ocupacoes", ocupacoesDeputadoController);
router.get("/:id/frentes", frentesDeputadoController);

export default router;
