import { UnauthorizedError } from "express-jwt";
import { ValidationError } from "express-validation";
import { Request, Response } from 'express';

module.exports = (error: any, req: Request, res: Response) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  if (error instanceof UnauthorizedError) {
    return res.status(error.status).json(error);
  }

  return res.status(500).json(error);
};