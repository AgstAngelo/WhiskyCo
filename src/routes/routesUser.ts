import { Router } from "express";
import controller from "../controllers/controllerUser";
import isAdmin from "../middlewares/isAdmin";

const routes = Router();

routes.post("/user", controller.create);
routes.post("/user/admin", isAdmin, controller.createAdmin);
routes.get("/user", isAdmin, controller.findAll);
routes.get("/user/:id", isAdmin, controller.findOne);
routes.put("/user/:id", isAdmin, controller.update);
routes.delete("/user/:id", isAdmin, controller.delete);


export default routes;
