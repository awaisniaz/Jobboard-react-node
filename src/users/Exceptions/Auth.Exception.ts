import { HttpException, HttpStatus } from '@nestjs/common';

export class Auth_Exception extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

// exception
