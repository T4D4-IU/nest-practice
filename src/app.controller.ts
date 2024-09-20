import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); // GET/でAppServiceクラス(app.service.ts)に記述されたgetHelloメソッドが実行される
  }

  @Get('goodbye')
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
}
