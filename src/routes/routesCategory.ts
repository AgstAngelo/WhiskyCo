import { Router } from "express";
import controller from "../controllers/controllerCategory";
import isAdmin from "../middlewares/isAdmin";

const routes = Router();

routes.post("/category", isAdmin, controller.create);
routes.get("/category", controller.findAll);
routes.get("/category/:id", controller.findOne);
routes.put("/category/:id", isAdmin, controller.update);
routes.delete("/category/:id", isAdmin, controller.delete);

export default routes;