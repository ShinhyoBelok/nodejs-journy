const {createReadStream, writeFileSync} =  require('fs');

for (let i = 0; i < 10000; i++) {
  writeFileSync(
    './build-in-module/big.txt',
    `Here the big file ${i}`,
    { flag: 'a' }
  )
}