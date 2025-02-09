import webpack from "webpack";

function buildLoaders(): webpack.RuleSetRule[] {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}

export default buildLoaders;