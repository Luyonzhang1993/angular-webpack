module.exports = {
    entry:'./src/enter.js',
    output:{
        path:__dirname ,
        filename:'build.js'
    },
    devtool:'source-map',
    module:{
        loaders:[
            {test:/\.js$/,exclude:/node_modules/,loader:'babel'},
            {test:/\.css$/,loader:'style!css'}
        ]
    }
};
