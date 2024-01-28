import * as path from 'path'
import { Configuration } from 'webpack'
import { CleanWebpackPlugin } from "clean-webpack-plugin"

const config: Configuration = {
    entry: './src/index.ts',
    target: 'node',
    externals: {
        "express": "require('express')"
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};

export default config
