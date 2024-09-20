import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string { //GET/(app.controller.tsに書かれている)で、コレが実行される
    return 'Hello World!!!';
  }

  getGoodbye(): string {
    return 'Good Bye!!!';
  }
}
