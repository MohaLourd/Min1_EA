import { Request, Response } from "express";
import { EtiquetaMin1Service } from "../services/etiquetaMin1.service";
import { IetiquetaMin1 } from "../models/etiquetaMin1";

const etiquetaMin1Service = new EtiquetaMin1Service();

export async function createEtiqueta(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const etiqueta = req.body as IetiquetaMin1;
    const newEtiqueta = await etiquetaMin1Service.createEtiqueta(etiqueta);
    res.status(201).json(newEtiqueta);
  } catch (error) {
    res.status(400).json({ message: "Error creating etiqueta", error });
  }
}

export async function getAllEtiquetas(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const etiquetas = await etiquetaMin1Service.getAllEtiquetas();
    res.status(200).json(etiquetas);
  } catch (error) {
    res.status(400).json({ message: "Error getting etiquetas", error });
  }
}

export async function getEtiquetaById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const id = req.params.id;
    const etiqueta = await etiquetaMin1Service.getEtiquetaById(id);
    res.status(200).json(etiqueta);
  } catch (error) {
    res.status(404).json({ message: "Etiqueta not found", error });
  }
}

export async function updateEtiquetaById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const id = req.params.id;
    const etiqueta = req.body as IetiquetaMin1;
    const updatedEtiqueta = await etiquetaMin1Service.updateEtiquetaById(
      id,
      etiqueta
    );
    res.status(200).json(updatedEtiqueta);
  } catch (error) {
    res.status(400).json({ message: "Error updating etiqueta", error });
  }
}

export async function deleteEtiquetaById(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const id = req.params.id;
    const deletedEtiqueta = await etiquetaMin1Service.deleteEtiquetaById(id);
    res.status(200).json(deletedEtiqueta);
  } catch (error) {
    res.status(400).json({ message: "Error deleting etiqueta", error });
  }
}

export async function searchEtiquetas(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name } = req.query; // Obtener el parámetro de búsqueda desde la query string
    if (!name || typeof name !== "string") {
      res
        .status(400)
        .json({ message: "Invalid or missing 'name' query parameter" });
      return;
    }
    const etiquetas = await etiquetaMin1Service.searchEtiquetasByName(name);
    if (etiquetas.length === 0) {
      res.status(404).json({ message: "Etiqueta not found" });
      return;
    }
    res.status(200).json(etiquetas);
  } catch (error) {
    res.status(500).json({ message: "Error searching etiquetas", error });
  }
}
