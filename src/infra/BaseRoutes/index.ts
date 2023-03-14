import { Router } from "express";
import userRoutes from "../../routes/routesUser";
import categoryRoutes from "../../routes/routesCategory";
import productRoutes from "../../routes/routesProduct";
import authRoutes from "../../routes/routesAuth";
import brandRoutes from "../../routes/routesBrand";
import orderRoutes from "../../routes/routesOrder";
import userOrdersRoutes from "../../routes/routesUserOrder";
import Express, { Application, Request, Response, NextFunction } from "express";


const routes = Router();


routes.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


routes.use(userRoutes);
routes.use(categoryRoutes);
routes.use(productRoutes);
routes.use(authRoutes);
routes.use(brandRoutes);
routes.use(orderRoutes);
routes.use(userOrdersRoutes);

export default routes;
