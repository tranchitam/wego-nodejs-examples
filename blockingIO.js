const fs = require('fs');
const data = fs.readFileSync('./README.md'); // blocks here until file is read
console.log(data);
console.log('More work');