import { createHash } from 'crypto';
import { readFile } from 'fs';

const calculateHash = async () => {
  //  implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
  readFile('./files/fileToCalculateHashFor.txt', (err, file) => {
    if (err) {
      throw new Error(err.message);
    }
    console.log(createHash('sha256').update(file).digest('hex'));
  });
};

await calculateHash();
