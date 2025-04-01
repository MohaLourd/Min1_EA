import { connect, connection } from "mongoose";
//mongodb://localhost:27017/proyecto
const mongoURI = "mongodb://localhost:27017/Minim";

export async function startConnection() {
  try {
    await connect(mongoURI, {});
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Unable to connect to MongoDB. Error:", err);
  }
}
