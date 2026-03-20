/**
 * Kafka Consumer (Simulated)
 * Consumes data from Kafka topic for real-time processing
 */

let consumerActive = false;
let messageBuffer = [];

export const consumeFromKafka = async (topic = "narratives-topic") => {
  console.log("📥 Kafka Consumer: Active on topic", topic);
  consumerActive = true;

  // Simulate consumer polling
  await new Promise((resolve) => setTimeout(resolve, 30));

  // In a real implementation, this would return messages from the topic
  // For simulation, we return null to fall back to original data
  const messages = messageBuffer.length > 0 ? [...messageBuffer] : null;

  // Clear buffer after consuming
  if (messages) {
    messageBuffer = [];
    console.log(`📥 Kafka Consumer: Consumed ${messages.length} messages`);
  } else {
    console.log("📥 Kafka Consumer: No new messages, using fallback data");
  }

  return messages;
};

export const subscribeToTopic = (topic, callback) => {
  console.log(`📥 Kafka Consumer: Subscribed to ${topic}`);

  // Simulate real-time message arrival (for future WebSocket integration)
  return {
    unsubscribe: () => {
      console.log(`📥 Kafka Consumer: Unsubscribed from ${topic}`);
      consumerActive = false;
    },
  };
};

export const getConsumerStatus = () => ({
  active: consumerActive,
  bufferedMessages: messageBuffer.length,
  groupId: "digital-pulse-consumers",
});

// Queue message to buffer (used by producer in real scenarios)
export const queueMessage = (message) => {
  messageBuffer.push(message);
};
