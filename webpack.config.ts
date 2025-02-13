import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildPaths, EnvOptions} from "./config/build/types/config";
import path from "path";


export default (env: EnvOptions) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'bundle'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000
    ;
    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });
};