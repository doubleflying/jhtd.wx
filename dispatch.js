const egg = require('egg');

var options = {
    baseDir: __dirname,
    port: 9999
}

egg.startCluster(options, () => {
    console.log('started at port :9999');
});