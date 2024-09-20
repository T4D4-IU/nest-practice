import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //インスタンス生成
  await app.listen(3000); // listenメソッドで起動し3000ポートを監視してる
}
bootstrap();
