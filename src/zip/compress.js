import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import fs from 'node:fs';

const compress = async () => {
  pipeline(
    fs.createReadStream('./files/fileToCompress.txt'),
    createGzip(),
    fs.createWriteStream('./files/archive.gz'),
    (err) => {
      if (err) {
        throw new Error(err.message);
      }
    }
  );
};

await compress();
