import { Module } from '@nestjs/common';
import { ClientsModule, Transport, KafkaOptions } from '@nestjs/microservices';
import { KafkaPartitioning2Controller } from './kafka-partitioning2.controller';
import { KafkaPartitioning2Service } from './kafka-partitioning2.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'hero-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [KafkaPartitioning2Controller],
  providers: [KafkaPartitioning2Service],
})
export class KafkaPartitioning2Module {}
