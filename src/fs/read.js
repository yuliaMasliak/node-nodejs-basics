import { readFile } from 'fs';
const { stdout } = process;

const read = async () => {
  //  implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
  readFile('files/fileToRead.txt', (err, file) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    stdout.write(file);
  });
};

await read();
