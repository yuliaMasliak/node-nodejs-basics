const { stdin, stdout } = process;
import { Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split('').reverse().join('') + '\n';
      this.push(reversedText);
      callback();
    }
  });
  stdin.pipe(reverse).pipe(stdout);
};

await transform();
