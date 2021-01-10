import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern('cmdsum')
  async getHello(@Ctx() context: KafkaContext): Promise<any> {
    const originalMessage = context.getMessage();
    console.log('originalMessage', originalMessage);
    return { key: originalMessage.key, value: 'yolo' };
  }
}
