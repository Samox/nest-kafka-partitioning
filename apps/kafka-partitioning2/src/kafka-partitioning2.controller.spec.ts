import { Test, TestingModule } from '@nestjs/testing';
import { KafkaPartitioning2Controller } from './kafka-partitioning2.controller';
import { KafkaPartitioning2Service } from './kafka-partitioning2.service';

describe('KafkaPartitioning2Controller', () => {
  let kafkaPartitioning2Controller: KafkaPartitioning2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KafkaPartitioning2Controller],
      providers: [KafkaPartitioning2Service],
    }).compile();

    kafkaPartitioning2Controller = app.get<KafkaPartitioning2Controller>(KafkaPartitioning2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kafkaPartitioning2Controller.getHello()).toBe('Hello World!');
    });
  });
});
