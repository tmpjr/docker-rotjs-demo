var webpack = require('webpack');

var config = {
    context: __dirname + '/src',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/../www',
        filename: 'app.js'
    }
};

module.exports = config;
