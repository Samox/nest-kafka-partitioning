import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaPartitioning2Service {
  constructor(@Inject('HERO_SERVICE') private client: ClientKafka) {}

  onModuleInit() {
    this.client.subscribeToResponseOf('cmdsum8');
  }

  async getHello(): Promise<string> {
    const pattern = 'cmdsum8';
    const key = Math.floor(Math.random() * 10);

    const partition = key % 4;
    console.log(partition);
    const payload = {
      value: [1, 2, 3],
      key,
      partition,
    };

    const result = await this.client.send<number>(pattern, payload).toPromise();
    console.log('result', result);

    return 'Hello World!';
  }
}
