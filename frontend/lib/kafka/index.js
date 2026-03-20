/**
 * Kafka Module - Entry Point
 * Exports all Kafka-related functions for easy imports
 */

export { sendToKafka, sendBatchToKafka } from './producer';
export { consumeFromKafka, subscribeToTopic, getConsumerStatus, queueMessage } from './consumer';

// Kafka configuration (for future real implementation)
export const kafkaConfig = {
  brokers: ['localhost:9092'],
  clientId: 'digital-pulse-client',
  topics: {
    narratives: 'narratives-topic',
    emerging: 'emerging-signals-topic',
    forecasts: 'forecasts-topic',
    pulse: 'pulse-score-topic',
  },
  consumerGroup: 'digital-pulse-consumers',
};
