import { Worker } from 'bullmq';

const connection = {
  host: 'localhost',
  port: 6379,
};


const worker = new Worker(
  'messageQueue',
  async (job) => {

    console.log(`Processing task: ${job.id}, message: ${job.data.text}`);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(`Task completed: ${job.id}`);
  },
  { connection }
);


worker.on('failed', (job, err) => {
  console.error(`Job ${(job?.id ?? 'undefined')} Erro ${err.message}`);
});

worker.on('completed', (job) => {
  console.log(`Job ${job.id} Completado com sucesso`);
});
