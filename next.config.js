const withLess = require('@zeit/next-less')

module.exports = withLess({
    lessLoaderOptions: {
        lessOptions: {
            modifyVars: {
                'primary-color': '#722ed1',
                'body-background': '#141414'
            },
            javascriptEnabled: true
        }
    }
})