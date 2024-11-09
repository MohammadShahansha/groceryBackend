import { NextFunction, Request, Response } from 'express';
import { catchAsinc } from '../utils/catchAsinc';
// import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';

interface CustomeRequest extends Request {
  user: JwtPayload;
}

const auth = (...requirdRoles: string[]) => {
  return catchAsinc(
    async (req: CustomeRequest, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;
      // console.log(token);
      if (!token) {
        throw new AppError(401, 'You are not authorized person');
      }

      const decoded = jwt.verify(
        token,
        config.jwt_access_token as string,
      ) as JwtPayload;
      const role = decoded.role;
      if (requirdRoles && !requirdRoles.includes(role)) {
        throw new AppError(401, 'You are not authorize');
      }

      // decoded undefined
      req.user = decoded as JwtPayload;
      next();
    },
  );
};

export default auth;
