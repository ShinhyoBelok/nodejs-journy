const os = require('os');

const user = os.userInfo()
console.log(user);

// method that returns the system updatime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMen: os.freemem(),
}

console.log(currentOs);