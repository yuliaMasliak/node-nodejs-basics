const { stdout } = process;

const parseEnv = () => {
  for (let elem in process.env) {
    if (elem.includes('RSS_')) {
      stdout.write(`${elem}=${process.env[elem]}\n`);
    }
  }
};

parseEnv();
