import { Controller } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern('cmdsum')
  async getHello(@Ctx() context: KafkaContext): Promise<any> {
    const originalMessage = context.getMessage();
    console.log('originalMessage', originalMessage.key);
    return { key: originalMessage.key, value: 'yolo' };
  }

  @MessagePattern('cmdsum8')
  async getHello2(@Ctx() context: KafkaContext): Promise<any> {
    const originalMessage = context.getMessage();
    console.log('originalMessage', originalMessage.key);
    console.log('headers', originalMessage.headers);
    return { value: originalMessage.key };
  }
}
