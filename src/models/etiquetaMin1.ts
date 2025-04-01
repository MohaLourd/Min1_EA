import { Schema, model } from "mongoose";

export interface IetiquetaMin1 {
  name: string;
  fecha?: string;
  NumCmabios?: number;
  NumCambiosMax?: number;
}

const etiquetaMin1Schema = new Schema<IetiquetaMin1>({
  name: {
    type: String,
    enum: ["etiqueta1", "etiqueta2", "etiqueta3", "etiqueta4"], // Conjunto de strings posibles
  },
  fecha: {
    type: String,
  },
  NumCmabios: {
    type: Number,
  },
  NumCambiosMax: {
    type: Number,
  },
});

export const etiquetaMin1Model = model("etiquetaMin1", etiquetaMin1Schema);
