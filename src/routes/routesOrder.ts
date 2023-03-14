import { Router } from "express";
import controller from "../controllers/controllerOrder";
import authValidation from "../middlewares/auth";
import isAdmin from "../middlewares/isAdmin";

const routes = Router();

routes.post("/order", authValidation, controller.create);
routes.get("/order", authValidation, isAdmin, controller.findAll);
routes.get("/order/:id", authValidation, isAdmin, controller.findOne);
routes.put("/order/:id", authValidation, isAdmin, controller.update);
routes.delete("/order/:id", authValidation, isAdmin, controller.delete);


export default routes;
