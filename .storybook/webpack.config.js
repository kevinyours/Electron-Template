const path = require('path');
const SRC_PATH = path.join(__dirname, '../src/renderer');
const STORIES_PATH = path.join(__dirname, '../stories');
//dont need stories path if you have your stories inside your //components folder
module.exports = ({ config }) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            include: [SRC_PATH, STORIES_PATH],
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            ['react-app', { flow: false, typescript: true }],
                        ],
                    },
                },
                { loader: require.resolve('react-docgen-typescript-loader') },
            ],
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
        }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
