import // 接口版本控制
// VersioningType

'@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启接口版本配置
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
