const spawnChildProcess = async (args) => {
  // implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
  // child process stdin should receive input from master process stdin
  // child process stdout should send data to master process stdout
};

// Put your arguments in function call to test this functionality
spawnChildProcess(/* [someArgument1, someArgument2, ...] */);
