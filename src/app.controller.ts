import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as process from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(): string {
    return this.appService.getUser();
  }

  @Post()
  postUser(): string {
    return this.appService.postUser();
  }
}
