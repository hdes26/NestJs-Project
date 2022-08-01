import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const port = process.env.PORT
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('TASK API DOCUMENTATION')
  .setDescription('Here you can see the endpoints and test everyone')
  .setVersion('1.0')
  .addTag('Task')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();
