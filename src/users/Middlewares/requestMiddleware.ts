import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class Auth_User implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('I am Auth User Middleware');
    next();
  }
}
