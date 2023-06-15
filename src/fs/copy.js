import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
  const newPath = './new-files';
  const currentPath = './files';

  if (await fs.access(newPath).catch(() => true)) {
    fs.mkdir(newPath);
    const files = await fs.readdir(currentPath);
    files.forEach((el) => {
      fs.copyFile(path.resolve(currentPath, el), path.resolve(newPath, el));
    });
  } else {
    throw new Error('FS operation failed');
  }
};

await copy();
