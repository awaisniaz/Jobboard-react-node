import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  login(): string {
    return this.appService.getHello();
  }

  @Post('/signup')
  signup(): string {
    return 'I am login Path';
  }
}
