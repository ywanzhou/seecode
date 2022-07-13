import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import // 接口版本控制
// VersioningType

'@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启接口版本配置
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
