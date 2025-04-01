import { etiquetaMin1Model, IetiquetaMin1 } from "../models/etiquetaMin1";

export class EtiquetaMin1Service {
  async createEtiqueta(
    etiqueta: Partial<IetiquetaMin1>
  ): Promise<IetiquetaMin1> {
    const newEtiqueta = new etiquetaMin1Model(etiqueta);
    return await newEtiqueta.save();
  }

  async getAllEtiquetas(): Promise<IetiquetaMin1[]> {
    return await etiquetaMin1Model.find();
  }

  async getEtiquetaById(id: string): Promise<IetiquetaMin1 | null> {
    return await etiquetaMin1Model.findById(id);
  }

  async updateEtiquetaById(
    id: string,
    etiqueta: Partial<IetiquetaMin1>
  ): Promise<IetiquetaMin1 | null> {
    return await etiquetaMin1Model.findByIdAndUpdate(id, etiqueta, {
      new: true,
    });
  }

  async deleteEtiquetaById(id: string): Promise<IetiquetaMin1 | null> {
    return await etiquetaMin1Model.findByIdAndDelete(id);
  }

  async searchEtiquetasByName(name: string): Promise<IetiquetaMin1[]> {
    return await etiquetaMin1Model.find({
      name: { $regex: name, $options: "i" }, // Búsqueda insensible a mayúsculas/minúsculas
    });
  }
}
