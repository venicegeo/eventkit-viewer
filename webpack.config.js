var webpack = require('webpack');
var path = require('path');
var WriteFilePlugin = require('write-file-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJs = require('uglifyjs-webpack-plugin');

var BASE_DIR = path.resolve('/var', 'lib', 'eventkit');
var BUILD_DIR = path.resolve(BASE_DIR, 'build');
var APP_DIR = path.resolve(BASE_DIR, 'app');

var PROD = JSON.parse(process.env.PROD || false);
var devtool = 'source-map';
var plugins = [
    new WriteFilePlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
        name:'node-modules', 
        filename: 'node-modules.js', 
        minChunks(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        }
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html'
    })
];
var app = [APP_DIR + '/index.js'];

var config = {
    devtool: devtool,
    entry: {
        app: app,
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: [/node_modules\/(?!jsts)/, /staticfiles/],
                loader: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // {
            //     test: /\.css$/,
            //     loader: 'css-loader?modules=true,localIdentName=[name]__[local]___[hash:base64:5]',
            // },
            // {
            //     test: /\.s?css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', {
            //             loader: 'sass-loader',
            //             options: {
            //                 includePaths: ['node_modules'],
            //             }
            //         }],
            //     }),
            //
            // },
            {
                test: /\.(woff2?|ttf|eot)$/,
                loader: 'url-loader?limit=100000,name=fonts/[hash].[ext]',
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=100000,name=images/[hash].[ext]',
            }
        ],
    },
    plugins: plugins,
    devServer: {
        hot: true,
        contentBase: BASE_DIR,
        watchContentBase: true,
        publicPath: BUILD_DIR,
        host: "0.0.0.0",
        port: 7080,
        historyApiFallback: true,
        disableHostCheck: true,
        watchOptions: {
            poll: true
        },
        inline: true
    },

};

if (PROD) {
    config.plugins.push(new webpack.DefinePlugin({'process.env.NODE_ENV': "'production'"}));
    config.plugins.push(new UglifyJs());
} else {
    config.entry.app.push('webpack-dev-server/client?http://0.0.0.0:7080')
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.devtool = 'inline-source-map';
}


module.exports = config;
