import Express, { Application } from "express";
import { mongoDB } from "../database";
import BaseRoutes from "./BaseRoutes";

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

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.log(`Servidor rodando na porta: ${selectedPort}`)
    );
  }

  getInstance() {
    return this.instance;
  }
}
