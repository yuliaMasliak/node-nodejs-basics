import fs from 'fs';

const rename = async () => {
  fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
    if (err) throw new Error(err.message);
  });
};

await rename();
