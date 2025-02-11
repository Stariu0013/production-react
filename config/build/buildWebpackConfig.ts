import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        // while mode dev there will be sourceMap in build files(which are not needed for prod)
        devServer: isDev ? buildDevServer(options) : void 0,
        devtool: isDev ? 'inline-source-map' : void 0,
    }
}