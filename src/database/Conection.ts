import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default class Connection {
  private db_conection_string: string;

  constructor(db_conection_string: string) {
    this.db_conection_string = db_conection_string;
  }

  async createConection() {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      console.error("MONGO_URL not found in .env file");
      return;
    }

    try {
      await connect(mongoUrl);
      console.log("Banco de dados conectado");
    } catch (error) {
      console.error(error);
    }
  }
}