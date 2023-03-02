import { Router } from "express";
import controller from "../controllers/controllerAuth";
const authLoginValidation = require("../validations/login"); 
const routes = Router();

routes.post("/login", authLoginValidation, controller.login);

export default routes;
