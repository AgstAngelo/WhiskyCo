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
        // Return a custom error message if no authorization token was found
        res.status(401).json({ error: "No authorization token was found" });
      } else {
        // Pass the error to the default error handler
        next(err);
      }
    } else {
      // Call the next middleware in the chain
      next();
    }
  });
};

export default authValidation;