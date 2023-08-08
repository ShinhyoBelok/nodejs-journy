const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./build-in-module/big.txt','utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res)//writing into res that is return auto as a respond
  })
  fileStream.on('error', (err) => {
    res.end(err)
  })
})

server.listen(3000);