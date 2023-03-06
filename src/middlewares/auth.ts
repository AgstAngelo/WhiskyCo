import { expressjwt } from "express-jwt";
import { secret } from "../configs/secret";
import { NextFunction, Request, Response } from 'express';

const authValidation = (req: Request, res: Response, next: NextFunction) => {
  expressjwt({
    secret: secret.key,
    algorithms: ["HS256"],
  })(req, res, (err) => {
    if (err) {
      if (err.name === "UnauthorizedError") {
        
        res.status(401).json({ error: "No authorization token was found" });
      } else {
        
        next(err);
      }
    } else {
      
      next();
    }
  });
};

export default authValidation;