import { Request } from 'express';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { secret } from '../configs/secret';

interface DecodedToken {
    id: string;
  }
  
  const tokenUserId = (req: Request) => {
    const authHeader = req.headers.authorization as string;
    const token = authHeader?.split(' ')[1];
  
    if (!token) {
      return undefined;
    }
  
    try {
      const decoded = jwt.verify(token, secret.key) as DecodedToken;
      const userId = decoded.id;
      console.log(userId);
      return userId;
  
    } catch (error) {
      return undefined;
    }
  };

export default tokenUserId;
