import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('APIREST DOC')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('DSNS-PRACTICE')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const server = await app.listen(configService.get<string>('PORT'));
  server.setTimeout(3600000);
}
bootstrap();
