import { Router } from "express";
import controller from "../controllers/controllerProduct";
import isAdmin from "../middlewares/isAdmin";
import createProd from "../validations/Product/createProd";
import updateProd from "../validations/Product/updateProd";

const routes = Router();

routes.post("/product", createProd, controller.create);
routes.get("/product", controller.findAll);
routes.get("/product/:name", controller.find);
routes.put("/product/:id", isAdmin, updateProd, controller.update);
routes.delete("/product/:id", isAdmin, controller.delete);

export default routes;
