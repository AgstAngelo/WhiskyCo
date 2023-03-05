import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { secret } from '../configs/secret';

interface DecodedUser {
  isAdmin: boolean;
}

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization token is missing.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, secret.key) as DecodedUser;
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'You do not have permission to access this resource.' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Authorization token is invalid.' });
  }
};

export default isAdmin;
