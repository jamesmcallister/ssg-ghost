// # Ghost Configuration
var path = require('path'),
    config;

config = {
    development: {
        url: 'http://localhost:2360',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/data/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '2360'
        },
        paths: {
            contentPath: path.join(__dirname, '/')
        }
    },
};

module.exports = config;