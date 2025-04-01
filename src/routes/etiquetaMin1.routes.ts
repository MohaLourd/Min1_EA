import { Router } from "express";
import {
  createEtiqueta,
  getAllEtiquetas,
  getEtiquetaById,
  updateEtiquetaById,
  deleteEtiquetaById,
  searchEtiquetas,
} from "../controllers/etiquetaMin1.controller";

const router = Router();

router.post("/", createEtiqueta);
router.get("/", getAllEtiquetas);
router.get("/:id", getEtiquetaById);
router.put("/:id", updateEtiquetaById);
router.delete("/:id", deleteEtiquetaById);
router.get("/search", searchEtiquetas); //aquíi esta el buscar, solo busca por nombre; no se me ocurre nada más.
export default router;
