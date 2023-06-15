const { stdout } = process;
const parseArgs = () => {
  const arr = process.argv.slice(2);
  arr.forEach((el, i) => {
    if (el.includes('--')) {
      stdout.write(`${el} is ${arr[i + 1]}\n`);
    }
  });
};

parseArgs();
