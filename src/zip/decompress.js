import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { log } from 'node:console';

const decompress = async () => {
  const content = createReadStream('./files/archive.gz');
  const unzipped = createWriteStream('./files/fileToCompress.txt');

  pipeline(content, createGunzip(), unzipped, (err) => {
    if (err) {
      log(err.message);
    }
  });
};

await decompress();
