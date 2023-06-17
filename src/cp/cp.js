import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const child = spawn('node', ['./files/script.js', ...args], {
    stdio: 'pipe'
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

spawnChildProcess([2, 5, '10']);
