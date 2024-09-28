const path = require('node:path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        configure: {
            resolve: {
                fallback: {
                    path: false,
                    os: false,
                    crypto: false,
                    stream: false,
                    buffer: false
                }
            }
        }
    }
};
