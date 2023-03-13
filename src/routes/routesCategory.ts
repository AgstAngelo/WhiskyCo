import { Router } from "express";
import controller from "../controllers/controllerCategory";
import isAdmin from "../middlewares/isAdmin";
import createCat from "../validations/Category/createCat";
import updateCat from "../validations/Category/updateCat";
const routes = Router();

routes.post("/category", isAdmin, createCat, controller.create);
routes.get("/category", controller.findAll);
routes.get("/category/:id", controller.findOne);
routes.put("/category/:id", isAdmin, updateCat, controller.update);
routes.delete("/category/:id", isAdmin, controller.delete);

export default routes;