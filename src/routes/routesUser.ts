import { Router } from "express";
import controller from "../controllers/controllerUser";
import isAdmin from "../middlewares/isAdmin";
import authValidation from "../middlewares/auth";

const routes = Router();

routes.post("/user", authValidation, controller.create);
routes.post("/user/admin", authValidation, isAdmin, controller.createAdmin);
routes.get("/user", authValidation, isAdmin, controller.findAll);
routes.get("/user/:id", authValidation, isAdmin, controller.findOne);
routes.put("/user/:id", authValidation, isAdmin, controller.update);
routes.delete("/user/:id", authValidation, isAdmin, controller.delete);

export default routes;