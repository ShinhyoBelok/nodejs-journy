const {createReadStream} =  require('fs');

const stream = createReadStream('./build-in-module/big.txt', { encoding: 'utf8' });

//64kb by default
// las buffer - remainder
// highWaterMark - control size of chunkz that are read
// const stram = createReadStream('.build-in-module/big.txt', { highWaterMark: 90000 })
// const stram = createReadStream('.build-in-module/big.txt', { encoding: 'utf8' })

stream.on('data', (result) => {
  console.log(result);
})