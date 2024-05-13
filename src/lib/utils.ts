import { type ClassValue, clsx } from "clsx"
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ConnectionStatus {
  isConnected?: number;
}
const connection: ConnectionStatus = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection")
      return
    }

    const db = await mongoose.connect(String(process.env.MONGODB_URL))
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error("Failed to connect to db")
  }
}
