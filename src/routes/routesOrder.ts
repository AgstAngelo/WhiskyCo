import { Router } from "express";
import controller from "../controllers/controllerOrder";

const routes = Router();

routes.post("/order", controller.create);
routes.get("/order", controller.findAll);
routes.get("/order/:id", controller.findOne);
routes.put("/order/:id", controller.update);
routes.delete("/order/:id", controller.delete);

export default routes;
