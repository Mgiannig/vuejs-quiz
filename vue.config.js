module.exports ={
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-quiz/'
    : '',
     devServer: {
        disableHostCheck: true
    }
}