import fs from 'fs';
import path from 'path';

const create = async () => {
  const dir = path.resolve('./files/fresh.txt');

  fs.open(dir, (err) => {
    if (err) {
      const body = 'I am fresh and young';
      fs.writeFile(dir, body, () => {});
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();
