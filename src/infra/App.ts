import Express, { Application, Request, Response, NextFunction } from "express";
import { mongoDB } from "../database";
import BaseRoutes from "./BaseRoutes";
import multer from "multer";
//import storage from "../middlewares/upload";

type SetupOptions = {
  isTest?: boolean;
  port?: number;
};
export default class App {
  private instance: Application;
  private defaultPort: number = 4000;

  
  constructor() {
    this.instance = Express();
  }

  setup(options: SetupOptions): void {
    mongoDB.createConection();
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.json());
    this.instance.use(BaseRoutes);

    //this.instance.use(multer({ storage: storage }).single("picture"));

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.log(`Servidor rodando na porta: ${selectedPort}`)
    );
  }

  getInstance() {
    return this.instance;
  }
}
