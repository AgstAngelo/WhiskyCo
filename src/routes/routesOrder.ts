import { Router } from "express";
import controller from "../controllers/controllerOrder";
import authValidation from "../middlewares/auth"
const routes = Router();

routes.post("/order", authValidation, controller.create);
routes.get("/order", authValidation, controller.findAll);
routes.get("/order/:id", authValidation, controller.findOne);
routes.put("/order/:id", authValidation, controller.update);
routes.delete("/order/:id", authValidation, controller.delete);

export default routes;
