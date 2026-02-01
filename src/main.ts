import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "https://697f95c02a1837000885f826--currency-converter-umair-yasin.netlify.app", // 👈 replace with your Netlify URL
    methods: "GET,POST",
  });
  await app.listen(process.env.PORT || 3000); // 👈 important for Render
}
bootstrap();
