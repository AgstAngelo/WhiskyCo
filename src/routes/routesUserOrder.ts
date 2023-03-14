import { Router } from "express";
import controller from "../controllers/controllerOrder";
import authValidation from "../middlewares/auth";
import tokenUserId from "../middlewares/tokenUserId";
const routes = Router();

routes.get("/userorders", authValidation, controller.getOrders);

export default routes;
