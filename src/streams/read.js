const { stdout } = process;
import fs from 'fs';

const read = async () => {
  const content = fs.createReadStream('./files/fileToRead.txt');
  content.on('data', (chunk) => {
    stdout.write(chunk);
  });
};

await read();
