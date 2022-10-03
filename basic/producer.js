const { Kafka, Partitioners } = require('kafkajs');

const start = async () => {
  const kafka = new Kafka({
    clientId: 'producer-client-1',
    brokers: ['kafka:29092'],
  });

  const producer = kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner });

  await producer.connect();
  await producer.send({
    topic: 'dummy-topic',
    messages: [{ value: 'Hello KafkaJS user!' }],
  });

  await producer.disconnect();
};

start();