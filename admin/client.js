const { Kafka } = require('kafkajs');

const start = async () => {
  const kafka = new Kafka({
    clientId: 'consumer-client-1',
    brokers: ['kafka:29092'],
  });

  const consumer = kafka.consumer({ groupId: 'consumer-group-1' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'dummy-topic-2', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
}

start();
