import { Router } from "express";
import controller from "../controllers/controllerBrand";
import isAdmin from "../middlewares/isAdmin";

const routes = Router();

routes.post("/brand", isAdmin, controller.create);
routes.get("/brand", controller.findAll);
routes.get("/brand/:id", controller.findOne);
routes.put("/brand/:id", isAdmin, controller.update);
routes.delete("/brand/:id", isAdmin, controller.delete);

export default routes;