import { Router } from "express";
import controller from "../controllers/controllerBrand";
import isAdmin from "../middlewares/isAdmin";
import authValidation from "../middlewares/auth";

const routes = Router();

routes.post("/brand", authValidation, isAdmin, controller.create);
routes.get("/brand",  controller.findAll);
routes.get("/brand/:id", controller.findOne);
routes.put("/brand/:id", authValidation, isAdmin, controller.update);
routes.delete("/brand/:id", authValidation, isAdmin, controller.delete);

export default routes;