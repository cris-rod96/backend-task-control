import mongoose from "mongoose";
import { MONGO_URI } from "../config/index.js";
const { connect, connection } = mongoose;

const connectionInstance = {
  isConnected: false,
};

export const connectDB = async () => {
  if (connectionInstance.isConnected) return;

  try {
    const conn = await connect(MONGO_URI);
    console.log(`Conneted to: ${conn.connection.db.databaseName}`);
    connectionInstance.isConnected = conn.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};

connection.on("connected", () => {
  console.log("Database connected");
});
