import { ObjectId, Schema, model } from "mongoose";
import { IetiquetaMin1 } from "./etiquetaMin1";

export interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  phone: string;
  wallet: number;
  Flag: boolean;
  description?: string;
  avatar?: string;
  etiquetaMin1?: IetiquetaMin1; //Aquí se relaciona con user (Minim1)
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: false },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        return value.includes("@");
      },
      message: "Email must contain @",
    },
  },
  password: { type: String, required: true },
  phone: { type: String, required: false },
  wallet: { type: Number, required: false, default: 0 },
  Flag: { type: Boolean, required: false, default: true },
  description: { type: String, required: false },
  avatar: { type: String, required: false },
  etiquetaMin1: {
    type: Schema.Types.ObjectId,
    ref: "etiquetaMin1", // Referencia al modelo EtiquetaMin1
    required: false,
  },
});

export const UserModel = model("User", userSchema);
