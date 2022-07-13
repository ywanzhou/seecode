import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启接口版本配置
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });
  await app.listen(3000);
}
bootstrap();
