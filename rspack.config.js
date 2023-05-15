const mode = process.env.NODE_ENV || 'development';
const NodePolyfill = require('@rspack/plugin-node-polyfill');

console.log(mode);
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
    mode: 'development',
    context: __dirname,
    entry: {
        main: './src/main.tsx'
    },
    resolve: {
        alias: {
            '@': './src'
        }
    },
    devServer: {
        port: '5002',
    },
    builtins: {
        define: {
            'process.env.NODE_DEBUG': JSON.stringify(false),
        },
        html: [
            {
                template: './index.html'
            }
        ]
    },
    plugins: [new NodePolyfill()],
    module: {
        rules: [
            {
                test: /\.svg$/,
                type: 'asset'
            },
        ]
    }
};
