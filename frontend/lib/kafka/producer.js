/**
 * Kafka Producer (Simulated)
 * Sends data to Kafka topic for real-time streaming
 */

export const sendToKafka = async (data) => {
  console.log("📤 Kafka Producer: Sending data to topic...", {
    topic: "narratives-topic",
    recordCount: Array.isArray(data) ? data.length : 1,
    timestamp: new Date().toISOString(),
  });

  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 50));

  return {
    status: "sent",
    topic: "narratives-topic",
    partition: 0,
    offset: Date.now(),
    payload: data,
    timestamp: new Date().toISOString(),
  };
};

export const sendBatchToKafka = async (records, topic = "narratives-topic") => {
  console.log(`📤 Kafka Producer: Batch sending ${records.length} records to ${topic}`);

  const results = await Promise.all(
    records.map((record, index) => ({
      status: "sent",
      topic,
      partition: index % 3, // Simulate 3 partitions
      offset: Date.now() + index,
      key: record.id || record.post_id || index,
    }))
  );

  return {
    status: "batch_sent",
    topic,
    recordCount: records.length,
    results,
  };
};
