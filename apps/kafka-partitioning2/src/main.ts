import { NestFactory } from '@nestjs/core';
import { KafkaPartitioning2Module } from './kafka-partitioning2.module';

async function bootstrap() {
  const app = await NestFactory.create(KafkaPartitioning2Module);
  await app.listen(3001);
}
bootstrap();
