import {Request, Response, NextFunction} from "express"

declare global {
    type Req = Request;
    type Res = Response;
    type Next = NextFunction;
}

import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | { id: string; name?: string };
    }
  }
}