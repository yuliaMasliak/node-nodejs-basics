const { stdout } = process;
const parseArgs = () => {
  const arr = process.argv.slice(2);
  let resulString = '';
  arr.forEach((el, i) => {
    if (el.includes('--')) {
      resulString += `${el.slice(2)} is ${arr[i + 1]}, `;
    }
  });
  stdout.write(resulString.slice(0, resulString.length - 2));
};

parseArgs();
