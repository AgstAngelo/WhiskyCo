import { Router } from "express";
import controller from "../controllers/controllerCategory";
const routes = Router();

routes.post("/category", controller.create);
routes.get("/category", controller.findAll);
// routes.get("/post/:id", controller.findOne);
// routes.put("/post/:id", controller.update);
// routes.delete("/post/:id", controller.delete);

export default routes;