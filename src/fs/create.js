import fs from 'fs';

const create = async () => {
  const path = './files/fresh.txt';

  fs.open(path, (err) => {
    if (err) {
      const body = 'I am fresh and young';
      fs.writeFile(path, body, () => {});
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();

await create();
