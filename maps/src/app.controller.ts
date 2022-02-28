import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern("hello")
  getHello(n: number): string {
    return "Hello World " + n;
  }
}
