const { Kafka, Partitioners } = require('kafkajs');

const setupKafka = async () => {
  const kafka = new Kafka({
    clientId: 'admin-client-1',
    brokers: ['kafka:29092'],
  });

  const admin = kafka.admin();

  await admin.connect();
  await admin.createTopics({
    topics: [{
      topic: 'dummy-topic-2',
      numPartitions: 3,
    }]
  });

  const topics = await admin.listTopics();
  console.log('topics', topics);

  await admin.disconnect();
};

setupKafka();