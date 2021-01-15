import { Controller, Get } from '@nestjs/common';
import { KafkaPartitioning2Service } from './kafka-partitioning2.service';

@Controller()
export class KafkaPartitioning2Controller {
  constructor(
    private readonly kafkaPartitioning2Service: KafkaPartitioning2Service,
  ) {}

  @Get()
  getHello(): any {
    return this.kafkaPartitioning2Service.getHello();
  }
}
