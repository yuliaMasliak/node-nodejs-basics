const { stdin } = process;
import fs from 'fs';

const write = async () => {
  const stream = fs.createWriteStream('./files/fileToWrite.txt');

  stdin.on('data', (chunk) => {
    stream.write(chunk);
  });
  stdin.on('SIGINT', () => {
    process.exit();
  });
};

await write();
