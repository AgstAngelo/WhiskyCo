import { Router } from "express";
import userRoutes from "../../routes/routesUser";
import categoryRoutes from "../../routes/routesCategory";
import productRoutes from "../../routes/routesProduct";
import authRoutes from "../../routes/routesAuth";
import brandRoutes from "../../routes/routesBrand";
import orderRoutes from "../../routes/routesOrder";

const routes = Router();

routes.use(userRoutes);
routes.use(categoryRoutes);
routes.use(productRoutes);
routes.use(authRoutes);
routes.use(brandRoutes);
routes.use(orderRoutes);

export default routes;
