import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('HERO_SERVICE') private client: ClientKafka) {}

  onModuleInit() {
    this.client.subscribeToResponseOf('cmdsum');
  }

  async getHello(): Promise<string> {
    const pattern = 'cmdsum';
    const partition = Math.random() < 0.5 ? 0 : 1;
    console.log(partition);
    const payload = {
      value: [1, 2, 3],
      key: Math.floor(Math.random() * 10),
      partition,
    };

    const result = await this.client.send<number>(pattern, payload).toPromise();
    console.log('result', result);

    return 'Hello World!';
  }
}
