import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getUser(): string {
    return this.configService.get('SECRET');
  }
  postUser(): string {
    return 'Hello World!';
  }
}
