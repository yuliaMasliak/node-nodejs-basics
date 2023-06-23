import { Worker, isMainThread, workerData, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import os from 'os';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const cores = os.cpus().length;

const performCalculations = async () => {
  let value = 10;
  let result = [];
  let completedCount = 0;
  const cores = os.cpus().length;

  if (isMainThread) {
    const getData = () => {
      for (let i = 0; i < cores; i++) {
        const workerPath = join(__dirname, 'worker.js');
        const worker = new Worker(workerPath);

        worker.on('message', (message) => {
          let obj = {
            status: 'resolved' || 'error',
            data: message || null
          };
          result.push(obj);
          completedCount += 1;
          if (completedCount === cores) {
            console.log('Final result:', result);
          }
        });

        worker.postMessage(value);
        value += 1;
      }
    };

    getData();
  }
};

await performCalculations();
