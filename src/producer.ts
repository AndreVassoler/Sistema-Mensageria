import { Queue } from 'bullmq';

// Conecte-se ao Redis (configuração padrão)
const connection = {
  host: 'localhost',
  port: 6379,
};

// Crie a fila chamada "messageQueue"
const messageQueue = new Queue('messageQueue', { connection });

// Função para adicionar uma mensagem/tarefa à fila
async function sendMessageToQueue(message: string) {
  await messageQueue.add('task', { text: message });
  console.log(`Message sent to queue: ${message}`);
}

// Envia algumas mensagens de exemplo
(async () => {
  await sendMessageToQueue('Hello, World!');
  await sendMessageToQueue('Another message to process');
  await sendMessageToQueue('Process this task!');
})();
