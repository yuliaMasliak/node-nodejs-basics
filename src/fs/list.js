const { stdout } = process;
import fs from 'fs/promises';

const list = async () => {
  try {
    const list = await fs.readdir('./files');
    list.forEach((file) => {
      stdout.write(file + '\n');
    });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
