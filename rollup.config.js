
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import myPackage from './package.json';

const initialComment = `/* ${myPackage.title} v${myPackage.version} | ${myPackage.author.name} (@${myPackage.customData.repository.accountName}) | ${myPackage.homepage} | ${myPackage.customData.repository.homepage} | ${myPackage.license} license */`;

const libraryNamespace = myPackage.customData.libraryNamespace;

const
optionsESM = {
    input: 'src/index.js',
    output: [

        // ES MODULE
        {
            file: 'dist/index-esm.js',
            format: 'es',
            plugins: [
                terser({
                    mangle: false,
                    sourcemap: false,
                    output: {
                        beautify: true,
                        preamble: initialComment
                    }
                })
            ]
        },

        // ES MODULE MINIFIED
        {
            file: 'dist/index-esm.min.js',
            format: 'es',
            plugins: [
                terser({
                    output: {
                        beautify: false,
                        preamble: initialComment
                    }
                })
            ],
            sourcemap: true
        }

    ]
},
optionsUMD = {
    input: 'src/index.js',
    output: [

        // UMD TRANSPILED SCRIPT
        {
            file: 'dist/index.js',
            format: 'umd',
            name: libraryNamespace,
            plugins: [
                terser({
                    mangle: false,
                    sourcemap: false,
                    output: {
                        beautify: true,
                        preamble: initialComment
                    }
                })
            ]
        },

        // UMD TRANSPILED SCRIPT MINIFIED
        {
            file: 'dist/index.min.js',
            format: 'umd',
            name: libraryNamespace,
            plugins: [
                terser({
                    output: {
                        beautify: false,
                        preamble: initialComment
                    }
                })
            ],
            sourcemap: true
        }

    ],
    plugins: [ resolve(), babel() ]
};

export default [ optionsESM, optionsUMD ]
