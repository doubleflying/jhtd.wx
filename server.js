const egg = require('egg');
const workers = Number(process.argv[2] || require('os').cpus().length);

var options = {
    workers,
    baseDir: __dirname,
    port: 9999
}

egg.startCluster(options, () => {
    console.log('started at port :9999');
});
